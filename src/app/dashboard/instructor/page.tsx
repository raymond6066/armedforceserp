'use client';

import React, { useEffect, useState } from 'react';
import {
  Typography,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
  CircularProgress,
  Stack,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface Course {
  id: string;
  title: string;
  enrolledCount: number;
}

export default function InstructorDashboard() {
  const [courses, setCourses] = useState<Course[] | null>(null);

  useEffect(() => {
    // TODO: fetch real instructor courses
    setTimeout(() => {
      setCourses([
        { id: 'i1', title: 'Advanced Tactics', enrolledCount: 25 },
        { id: 'i2', title: 'Warfare Leadership', enrolledCount: 18 },
      ]);
    }, 500);
  }, []);

  if (!courses) {
    return <CircularProgress />;
  }

  return (
    <div style={{ padding: 24 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4">Instructor Dashboard</Typography>
        <Button variant="contained" startIcon={<AddCircleIcon />}>
          New Course
        </Button>
      </Stack>

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course Title</TableCell>
              <TableCell align="right">Enrolled</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map(c => (
              <TableRow key={c.id}>
                <TableCell>{c.title}</TableCell>
                <TableCell align="right">{c.enrolledCount}</TableCell>
                <TableCell align="right">
                  <Button size="small">Edit</Button>
                  <Button size="small" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}