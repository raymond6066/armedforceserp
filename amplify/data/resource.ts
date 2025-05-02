// amplify/data/resource.ts
import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  UserProfile: a.model({
    fullName: a.string(),
    rank: a.string(),
    course:   a.string(),
    email: a.email(),
    phone:       a.string(),
    nextKin:     a.string(),
    passportUrl: a.string(),
    medicalUrl:  a.string(),
    role: a.enum(['STUDENT', 'INSTRUCTOR', 'ADMIN']),
  }).authorization((allow) => [
    allow.owner(), // users manage their own profile
    allow.group('Admin').to(['read', 'update', 'delete']), // Admins control all
  ]),

  Course: a.model({
    title: a.string(),
    description: a.string(),
    instructorId: a.string(),
  }).authorization((allow) => [allow.group('Instructor'), allow.group('Admin')]),

  Enrollment: a.model({
    userId: a.string(),
    courseId: a.string(),
  }).authorization((allow) => [allow.owner(), allow.group('Admin')]),

  Announcement: a.model({
    title: a.string(),
    content: a.string(),
    postedBy: a.string(),
  }).authorization((allow) => [allow.authenticated()]),

  Assignment: a.model({
    courseId: a.string(),
    title: a.string(),
    instructions: a.string(),
    dueDate: a.datetime(),
  }).authorization((allow) => [allow.group('Instructor')]),

  Submission: a.model({
    assignmentId: a.string(),
    studentId: a.string(),
    fileUrl: a.string(),
    submittedAt: a.datetime(),
  }).authorization((allow) => [allow.owner()]),

  Message: a.model({
    senderId: a.string(),
    receiverId: a.string(),
    body: a.string(),
    sentAt: a.datetime(),
  }).authorization((allow) => [allow.owner(), allow.group('Admin')]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});