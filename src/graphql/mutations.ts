/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAnnouncement = /* GraphQL */ `mutation CreateAnnouncement(
  $condition: ModelAnnouncementConditionInput
  $input: CreateAnnouncementInput!
) {
  createAnnouncement(condition: $condition, input: $input) {
    content
    createdAt
    id
    postedBy
    title
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAnnouncementMutationVariables,
  APITypes.CreateAnnouncementMutation
>;
export const createAssignment = /* GraphQL */ `mutation CreateAssignment(
  $condition: ModelAssignmentConditionInput
  $input: CreateAssignmentInput!
) {
  createAssignment(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateAssignmentMutationVariables,
  APITypes.CreateAssignmentMutation
>;
export const createCourse = /* GraphQL */ `mutation CreateCourse(
  $condition: ModelCourseConditionInput
  $input: CreateCourseInput!
) {
  createCourse(condition: $condition, input: $input) {
    createdAt
    description
    id
    instructorId
    title
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCourseMutationVariables,
  APITypes.CreateCourseMutation
>;
export const createEnrollment = /* GraphQL */ `mutation CreateEnrollment(
  $condition: ModelEnrollmentConditionInput
  $input: CreateEnrollmentInput!
) {
  createEnrollment(condition: $condition, input: $input) {
    courseId
    createdAt
    id
    owner
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEnrollmentMutationVariables,
  APITypes.CreateEnrollmentMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $condition: ModelMessageConditionInput
  $input: CreateMessageInput!
) {
  createMessage(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const createSubmission = /* GraphQL */ `mutation CreateSubmission(
  $condition: ModelSubmissionConditionInput
  $input: CreateSubmissionInput!
) {
  createSubmission(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateSubmissionMutationVariables,
  APITypes.CreateSubmissionMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: CreateUserProfileInput!
) {
  createUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const deleteAnnouncement = /* GraphQL */ `mutation DeleteAnnouncement(
  $condition: ModelAnnouncementConditionInput
  $input: DeleteAnnouncementInput!
) {
  deleteAnnouncement(condition: $condition, input: $input) {
    content
    createdAt
    id
    postedBy
    title
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAnnouncementMutationVariables,
  APITypes.DeleteAnnouncementMutation
>;
export const deleteAssignment = /* GraphQL */ `mutation DeleteAssignment(
  $condition: ModelAssignmentConditionInput
  $input: DeleteAssignmentInput!
) {
  deleteAssignment(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteAssignmentMutationVariables,
  APITypes.DeleteAssignmentMutation
>;
export const deleteCourse = /* GraphQL */ `mutation DeleteCourse(
  $condition: ModelCourseConditionInput
  $input: DeleteCourseInput!
) {
  deleteCourse(condition: $condition, input: $input) {
    createdAt
    description
    id
    instructorId
    title
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCourseMutationVariables,
  APITypes.DeleteCourseMutation
>;
export const deleteEnrollment = /* GraphQL */ `mutation DeleteEnrollment(
  $condition: ModelEnrollmentConditionInput
  $input: DeleteEnrollmentInput!
) {
  deleteEnrollment(condition: $condition, input: $input) {
    courseId
    createdAt
    id
    owner
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEnrollmentMutationVariables,
  APITypes.DeleteEnrollmentMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $condition: ModelMessageConditionInput
  $input: DeleteMessageInput!
) {
  deleteMessage(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const deleteSubmission = /* GraphQL */ `mutation DeleteSubmission(
  $condition: ModelSubmissionConditionInput
  $input: DeleteSubmissionInput!
) {
  deleteSubmission(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteSubmissionMutationVariables,
  APITypes.DeleteSubmissionMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: DeleteUserProfileInput!
) {
  deleteUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const updateAnnouncement = /* GraphQL */ `mutation UpdateAnnouncement(
  $condition: ModelAnnouncementConditionInput
  $input: UpdateAnnouncementInput!
) {
  updateAnnouncement(condition: $condition, input: $input) {
    content
    createdAt
    id
    postedBy
    title
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAnnouncementMutationVariables,
  APITypes.UpdateAnnouncementMutation
>;
export const updateAssignment = /* GraphQL */ `mutation UpdateAssignment(
  $condition: ModelAssignmentConditionInput
  $input: UpdateAssignmentInput!
) {
  updateAssignment(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateAssignmentMutationVariables,
  APITypes.UpdateAssignmentMutation
>;
export const updateCourse = /* GraphQL */ `mutation UpdateCourse(
  $condition: ModelCourseConditionInput
  $input: UpdateCourseInput!
) {
  updateCourse(condition: $condition, input: $input) {
    createdAt
    description
    id
    instructorId
    title
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCourseMutationVariables,
  APITypes.UpdateCourseMutation
>;
export const updateEnrollment = /* GraphQL */ `mutation UpdateEnrollment(
  $condition: ModelEnrollmentConditionInput
  $input: UpdateEnrollmentInput!
) {
  updateEnrollment(condition: $condition, input: $input) {
    courseId
    createdAt
    id
    owner
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEnrollmentMutationVariables,
  APITypes.UpdateEnrollmentMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $condition: ModelMessageConditionInput
  $input: UpdateMessageInput!
) {
  updateMessage(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const updateSubmission = /* GraphQL */ `mutation UpdateSubmission(
  $condition: ModelSubmissionConditionInput
  $input: UpdateSubmissionInput!
) {
  updateSubmission(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateSubmissionMutationVariables,
  APITypes.UpdateSubmissionMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: UpdateUserProfileInput!
) {
  updateUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
