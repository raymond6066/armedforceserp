/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAnnouncement = /* GraphQL */ `query GetAnnouncement($id: ID!) {
  getAnnouncement(id: $id) {
    content
    createdAt
    id
    postedBy
    title
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAnnouncementQueryVariables,
  APITypes.GetAnnouncementQuery
>;
export const getAssignment = /* GraphQL */ `query GetAssignment($id: ID!) {
  getAssignment(id: $id) {
    courseId
    createdAt
    dueDate
    id
    instructions
    title
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAssignmentQueryVariables,
  APITypes.GetAssignmentQuery
>;
export const getCourse = /* GraphQL */ `query GetCourse($id: ID!) {
  getCourse(id: $id) {
    createdAt
    description
    id
    instructorId
    title
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCourseQueryVariables, APITypes.GetCourseQuery>;
export const getEnrollment = /* GraphQL */ `query GetEnrollment($id: ID!) {
  getEnrollment(id: $id) {
    courseId
    createdAt
    id
    owner
    updatedAt
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEnrollmentQueryVariables,
  APITypes.GetEnrollmentQuery
>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    body
    createdAt
    id
    owner
    receiverId
    senderId
    sentAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const getSubmission = /* GraphQL */ `query GetSubmission($id: ID!) {
  getSubmission(id: $id) {
    assignmentId
    createdAt
    fileUrl
    id
    owner
    studentId
    submittedAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSubmissionQueryVariables,
  APITypes.GetSubmissionQuery
>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
    course
    createdAt
    email
    fullName
    id
    medicalUrl
    nextKin
    owner
    passportUrl
    phone
    rank
    role
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const listAnnouncements = /* GraphQL */ `query ListAnnouncements(
  $filter: ModelAnnouncementFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnnouncements(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      content
      createdAt
      id
      postedBy
      title
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAnnouncementsQueryVariables,
  APITypes.ListAnnouncementsQuery
>;
export const listAssignments = /* GraphQL */ `query ListAssignments(
  $filter: ModelAssignmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listAssignments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      courseId
      createdAt
      dueDate
      id
      instructions
      title
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAssignmentsQueryVariables,
  APITypes.ListAssignmentsQuery
>;
export const listCourses = /* GraphQL */ `query ListCourses(
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      description
      id
      instructorId
      title
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCoursesQueryVariables,
  APITypes.ListCoursesQuery
>;
export const listEnrollments = /* GraphQL */ `query ListEnrollments(
  $filter: ModelEnrollmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listEnrollments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      courseId
      createdAt
      id
      owner
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEnrollmentsQueryVariables,
  APITypes.ListEnrollmentsQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      body
      createdAt
      id
      owner
      receiverId
      senderId
      sentAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const listSubmissions = /* GraphQL */ `query ListSubmissions(
  $filter: ModelSubmissionFilterInput
  $limit: Int
  $nextToken: String
) {
  listSubmissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      assignmentId
      createdAt
      fileUrl
      id
      owner
      studentId
      submittedAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSubmissionsQueryVariables,
  APITypes.ListSubmissionsQuery
>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      course
      createdAt
      email
      fullName
      id
      medicalUrl
      nextKin
      owner
      passportUrl
      phone
      rank
      role
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
