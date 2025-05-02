/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAnnouncement = /* GraphQL */ `subscription OnCreateAnnouncement(
  $filter: ModelSubscriptionAnnouncementFilterInput
) {
  onCreateAnnouncement(filter: $filter) {
    content
    createdAt
    id
    postedBy
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAnnouncementSubscriptionVariables,
  APITypes.OnCreateAnnouncementSubscription
>;
export const onCreateAssignment = /* GraphQL */ `subscription OnCreateAssignment(
  $filter: ModelSubscriptionAssignmentFilterInput
) {
  onCreateAssignment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAssignmentSubscriptionVariables,
  APITypes.OnCreateAssignmentSubscription
>;
export const onCreateCourse = /* GraphQL */ `subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
  onCreateCourse(filter: $filter) {
    createdAt
    description
    id
    instructorId
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCourseSubscriptionVariables,
  APITypes.OnCreateCourseSubscription
>;
export const onCreateEnrollment = /* GraphQL */ `subscription OnCreateEnrollment(
  $filter: ModelSubscriptionEnrollmentFilterInput
  $owner: String
) {
  onCreateEnrollment(filter: $filter, owner: $owner) {
    courseId
    createdAt
    id
    owner
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEnrollmentSubscriptionVariables,
  APITypes.OnCreateEnrollmentSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $owner: String
) {
  onCreateMessage(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onCreateSubmission = /* GraphQL */ `subscription OnCreateSubmission(
  $filter: ModelSubscriptionSubmissionFilterInput
  $owner: String
) {
  onCreateSubmission(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSubmissionSubscriptionVariables,
  APITypes.OnCreateSubmissionSubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onCreateUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onDeleteAnnouncement = /* GraphQL */ `subscription OnDeleteAnnouncement(
  $filter: ModelSubscriptionAnnouncementFilterInput
) {
  onDeleteAnnouncement(filter: $filter) {
    content
    createdAt
    id
    postedBy
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAnnouncementSubscriptionVariables,
  APITypes.OnDeleteAnnouncementSubscription
>;
export const onDeleteAssignment = /* GraphQL */ `subscription OnDeleteAssignment(
  $filter: ModelSubscriptionAssignmentFilterInput
) {
  onDeleteAssignment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAssignmentSubscriptionVariables,
  APITypes.OnDeleteAssignmentSubscription
>;
export const onDeleteCourse = /* GraphQL */ `subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
  onDeleteCourse(filter: $filter) {
    createdAt
    description
    id
    instructorId
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCourseSubscriptionVariables,
  APITypes.OnDeleteCourseSubscription
>;
export const onDeleteEnrollment = /* GraphQL */ `subscription OnDeleteEnrollment(
  $filter: ModelSubscriptionEnrollmentFilterInput
  $owner: String
) {
  onDeleteEnrollment(filter: $filter, owner: $owner) {
    courseId
    createdAt
    id
    owner
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEnrollmentSubscriptionVariables,
  APITypes.OnDeleteEnrollmentSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $owner: String
) {
  onDeleteMessage(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onDeleteSubmission = /* GraphQL */ `subscription OnDeleteSubmission(
  $filter: ModelSubscriptionSubmissionFilterInput
  $owner: String
) {
  onDeleteSubmission(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSubmissionSubscriptionVariables,
  APITypes.OnDeleteSubmissionSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onDeleteUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onUpdateAnnouncement = /* GraphQL */ `subscription OnUpdateAnnouncement(
  $filter: ModelSubscriptionAnnouncementFilterInput
) {
  onUpdateAnnouncement(filter: $filter) {
    content
    createdAt
    id
    postedBy
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAnnouncementSubscriptionVariables,
  APITypes.OnUpdateAnnouncementSubscription
>;
export const onUpdateAssignment = /* GraphQL */ `subscription OnUpdateAssignment(
  $filter: ModelSubscriptionAssignmentFilterInput
) {
  onUpdateAssignment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAssignmentSubscriptionVariables,
  APITypes.OnUpdateAssignmentSubscription
>;
export const onUpdateCourse = /* GraphQL */ `subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
  onUpdateCourse(filter: $filter) {
    createdAt
    description
    id
    instructorId
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCourseSubscriptionVariables,
  APITypes.OnUpdateCourseSubscription
>;
export const onUpdateEnrollment = /* GraphQL */ `subscription OnUpdateEnrollment(
  $filter: ModelSubscriptionEnrollmentFilterInput
  $owner: String
) {
  onUpdateEnrollment(filter: $filter, owner: $owner) {
    courseId
    createdAt
    id
    owner
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEnrollmentSubscriptionVariables,
  APITypes.OnUpdateEnrollmentSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $owner: String
) {
  onUpdateMessage(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onUpdateSubmission = /* GraphQL */ `subscription OnUpdateSubmission(
  $filter: ModelSubscriptionSubmissionFilterInput
  $owner: String
) {
  onUpdateSubmission(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSubmissionSubscriptionVariables,
  APITypes.OnUpdateSubmissionSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onUpdateUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
