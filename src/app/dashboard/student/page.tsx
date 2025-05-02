'use client';

import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CircularProgress,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

import { getCurrentUser } from '@aws-amplify/auth';
import { generateClient } from '@aws-amplify/api';
import type { GraphQLResult } from '@aws-amplify/api-graphql';

import {
  ListEnrollmentsQuery,
  GetCourseQuery,
  ListAssignmentsQuery,
  ListAnnouncementsQuery,
} from '@/graphql/API';
import {
  listEnrollments,
  getCourse as getCourseQuery,
  listAssignments,
  listAnnouncements,
} from '@/graphql/queries';

type CourseWithAssignments = {
  id: string;
  title?: string | null;
  description?: string | null;
  assignments: Array<{ id: string; title?: string | null; dueDate?: string | null }>;
};

export default function StudentDashboard() {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState<CourseWithAssignments[]>([]);
  const [announcements, setAnnouncements] = useState<
    { id: string; title?: string | null; content?: string | null; createdAt: string }[]
  >([]);

  useEffect(() => {
    (async () => {
      try {
        // 1️⃣ Who is signed in?
        const { username } = await getCurrentUser();
        const client = generateClient();

        // 2️⃣ List this user’s enrollments by owner (Cognito identity)
        const enrol = (await client.graphql({
          query: listEnrollments,
          variables: { filter: { owner: { eq: username } } },
        })) as GraphQLResult<ListEnrollmentsQuery>;

        const courseIds = (enrol.data?.listEnrollments?.items ?? [])
          .map(e => e?.courseId)
          .filter((id): id is string => Boolean(id));

        // 3️⃣ For each courseId, fetch course + its assignments
        const loaded = await Promise.all(
          courseIds.map(async courseId => {
            // fetch course
            const c = (await client.graphql({
              query: getCourseQuery,
              variables: { id: courseId },
            })) as GraphQLResult<GetCourseQuery>;
            if (!c.data?.getCourse) return null;

            // fetch assignments for that course
            const a = (await client.graphql({
              query: listAssignments,
              variables: { filter: { courseId: { eq: courseId } } },
            })) as GraphQLResult<ListAssignmentsQuery>;

            const items = (a.data?.listAssignments?.items ?? []).filter(
              (x): x is any => x != null
            );

            return {
              id:    c.data.getCourse.id,
              title: c.data.getCourse.title,
              description: c.data.getCourse.description,
              assignments: items.map(x => ({
                id:      x.id,
                title:   x.title,
                dueDate: x.dueDate,
              })),
            } as CourseWithAssignments;
          })
        );
        setCourses(loaded.filter((c): c is CourseWithAssignments => c !== null));

        // 4️⃣ Grab the latest 5 announcements
        const ann = (await client.graphql({
          query: listAnnouncements,
          variables: { limit: 5 },
        })) as GraphQLResult<ListAnnouncementsQuery>;

        setAnnouncements(
          (ann.data?.listAnnouncements?.items ?? [])
            .filter((x): x is any => x != null)
            .map(x => ({
              id:        x.id,
              title:     x.title,
              content:   x.content,
              createdAt: x.createdAt,
            }))
        );
      } catch (e) {
        console.error('Dashboard load error', e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div style={{ padding: 24 }}>
      <Typography variant="h4" gutterBottom>
        <SchoolIcon style={{ verticalAlign: 'middle' }} /> Your Courses
      </Typography>

      <Grid container spacing={3}>
        {courses.map(course => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6">{course.title}</Typography>
                <Typography color="textSecondary">{course.description}</Typography>
                <Typography variant="subtitle2" sx={{ mt: 1 }}>
                  Assignments
                </Typography>
                {course.assignments.length ? (
                  course.assignments.map(a => (
                    <Typography key={a.id} variant="body2">
                      • {a.title} (Due {a.dueDate ?? '—'})
                    </Typography>
                  ))
                ) : (
                  <Typography variant="body2">No assignments yet</Typography>
                )}
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {announcements.length > 0 && (
        <>
          <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
            Latest Announcements
          </Typography>
          {announcements.map(a => (
            <Card key={a.id} sx={{ mb: 2 }} elevation={2}>
              <CardContent>
                <Typography variant="h6">{a.title}</Typography>
                <Typography color="textSecondary" variant="caption">
                  {new Date(a.createdAt).toLocaleDateString()}
                </Typography>
                <Typography sx={{ mt: 1 }}>{a.content}</Typography>
              </CardContent>
            </Card>
          ))}
        </>
      )}
    </div>
  );
}