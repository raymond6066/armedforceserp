/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Announcement = {
  __typename: "Announcement",
  content?: string | null,
  createdAt: string,
  id: string,
  postedBy?: string | null,
  title?: string | null,
  updatedAt: string,
};

export type Assignment = {
  __typename: "Assignment",
  courseId?: string | null,
  createdAt: string,
  dueDate?: string | null,
  id: string,
  instructions?: string | null,
  title?: string | null,
  updatedAt: string,
};

export type Course = {
  __typename: "Course",
  createdAt: string,
  description?: string | null,
  id: string,
  instructorId?: string | null,
  title?: string | null,
  updatedAt: string,
};

export type Enrollment = {
  __typename: "Enrollment",
  courseId?: string | null,
  createdAt: string,
  id: string,
  owner?: string | null,
  updatedAt: string,
  userId?: string | null,
};

export type Message = {
  __typename: "Message",
  body?: string | null,
  createdAt: string,
  id: string,
  owner?: string | null,
  receiverId?: string | null,
  senderId?: string | null,
  sentAt?: string | null,
  updatedAt: string,
};

export type Submission = {
  __typename: "Submission",
  assignmentId?: string | null,
  createdAt: string,
  fileUrl?: string | null,
  id: string,
  owner?: string | null,
  studentId?: string | null,
  submittedAt?: string | null,
  updatedAt: string,
};

export type UserProfile = {
  __typename: "UserProfile",
  course?: string | null,
  createdAt: string,
  email?: string | null,
  fullName?: string | null,
  id: string,
  medicalUrl?: string | null,
  nextKin?: string | null,
  owner?: string | null,
  passportUrl?: string | null,
  phone?: string | null,
  rank?: string | null,
  role?: UserProfileRole | null,
  updatedAt: string,
};

export enum UserProfileRole {
  ADMIN = "ADMIN",
  INSTRUCTOR = "INSTRUCTOR",
  STUDENT = "STUDENT",
}


export type ModelAnnouncementFilterInput = {
  and?: Array< ModelAnnouncementFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelAnnouncementFilterInput | null,
  or?: Array< ModelAnnouncementFilterInput | null > | null,
  postedBy?: ModelStringInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelAnnouncementConnection = {
  __typename: "ModelAnnouncementConnection",
  items:  Array<Announcement | null >,
  nextToken?: string | null,
};

export type ModelAssignmentFilterInput = {
  and?: Array< ModelAssignmentFilterInput | null > | null,
  courseId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  id?: ModelIDInput | null,
  instructions?: ModelStringInput | null,
  not?: ModelAssignmentFilterInput | null,
  or?: Array< ModelAssignmentFilterInput | null > | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelAssignmentConnection = {
  __typename: "ModelAssignmentConnection",
  items:  Array<Assignment | null >,
  nextToken?: string | null,
};

export type ModelCourseFilterInput = {
  and?: Array< ModelCourseFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  instructorId?: ModelStringInput | null,
  not?: ModelCourseFilterInput | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items:  Array<Course | null >,
  nextToken?: string | null,
};

export type ModelEnrollmentFilterInput = {
  and?: Array< ModelEnrollmentFilterInput | null > | null,
  courseId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelEnrollmentFilterInput | null,
  or?: Array< ModelEnrollmentFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type ModelEnrollmentConnection = {
  __typename: "ModelEnrollmentConnection",
  items:  Array<Enrollment | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  and?: Array< ModelMessageFilterInput | null > | null,
  body?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelMessageFilterInput | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  owner?: ModelStringInput | null,
  receiverId?: ModelStringInput | null,
  senderId?: ModelStringInput | null,
  sentAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type ModelSubmissionFilterInput = {
  and?: Array< ModelSubmissionFilterInput | null > | null,
  assignmentId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  fileUrl?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelSubmissionFilterInput | null,
  or?: Array< ModelSubmissionFilterInput | null > | null,
  owner?: ModelStringInput | null,
  studentId?: ModelStringInput | null,
  submittedAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelSubmissionConnection = {
  __typename: "ModelSubmissionConnection",
  items:  Array<Submission | null >,
  nextToken?: string | null,
};

export type ModelUserProfileFilterInput = {
  and?: Array< ModelUserProfileFilterInput | null > | null,
  course?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  medicalUrl?: ModelStringInput | null,
  nextKin?: ModelStringInput | null,
  not?: ModelUserProfileFilterInput | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  owner?: ModelStringInput | null,
  passportUrl?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  rank?: ModelStringInput | null,
  role?: ModelUserProfileRoleInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelUserProfileRoleInput = {
  eq?: UserProfileRole | null,
  ne?: UserProfileRole | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelAnnouncementConditionInput = {
  and?: Array< ModelAnnouncementConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelAnnouncementConditionInput | null,
  or?: Array< ModelAnnouncementConditionInput | null > | null,
  postedBy?: ModelStringInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateAnnouncementInput = {
  content?: string | null,
  id?: string | null,
  postedBy?: string | null,
  title?: string | null,
};

export type ModelAssignmentConditionInput = {
  and?: Array< ModelAssignmentConditionInput | null > | null,
  courseId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  instructions?: ModelStringInput | null,
  not?: ModelAssignmentConditionInput | null,
  or?: Array< ModelAssignmentConditionInput | null > | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateAssignmentInput = {
  courseId?: string | null,
  dueDate?: string | null,
  id?: string | null,
  instructions?: string | null,
  title?: string | null,
};

export type ModelCourseConditionInput = {
  and?: Array< ModelCourseConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  instructorId?: ModelStringInput | null,
  not?: ModelCourseConditionInput | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCourseInput = {
  description?: string | null,
  id?: string | null,
  instructorId?: string | null,
  title?: string | null,
};

export type ModelEnrollmentConditionInput = {
  and?: Array< ModelEnrollmentConditionInput | null > | null,
  courseId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelEnrollmentConditionInput | null,
  or?: Array< ModelEnrollmentConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type CreateEnrollmentInput = {
  courseId?: string | null,
  id?: string | null,
  userId?: string | null,
};

export type ModelMessageConditionInput = {
  and?: Array< ModelMessageConditionInput | null > | null,
  body?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelMessageConditionInput | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  owner?: ModelStringInput | null,
  receiverId?: ModelStringInput | null,
  senderId?: ModelStringInput | null,
  sentAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateMessageInput = {
  body?: string | null,
  id?: string | null,
  receiverId?: string | null,
  senderId?: string | null,
  sentAt?: string | null,
};

export type ModelSubmissionConditionInput = {
  and?: Array< ModelSubmissionConditionInput | null > | null,
  assignmentId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  fileUrl?: ModelStringInput | null,
  not?: ModelSubmissionConditionInput | null,
  or?: Array< ModelSubmissionConditionInput | null > | null,
  owner?: ModelStringInput | null,
  studentId?: ModelStringInput | null,
  submittedAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateSubmissionInput = {
  assignmentId?: string | null,
  fileUrl?: string | null,
  id?: string | null,
  studentId?: string | null,
  submittedAt?: string | null,
};

export type ModelUserProfileConditionInput = {
  and?: Array< ModelUserProfileConditionInput | null > | null,
  course?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  medicalUrl?: ModelStringInput | null,
  nextKin?: ModelStringInput | null,
  not?: ModelUserProfileConditionInput | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  owner?: ModelStringInput | null,
  passportUrl?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  rank?: ModelStringInput | null,
  role?: ModelUserProfileRoleInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserProfileInput = {
  course?: string | null,
  email?: string | null,
  fullName?: string | null,
  id?: string | null,
  medicalUrl?: string | null,
  nextKin?: string | null,
  passportUrl?: string | null,
  phone?: string | null,
  rank?: string | null,
  role?: UserProfileRole | null,
};

export type DeleteAnnouncementInput = {
  id: string,
};

export type DeleteAssignmentInput = {
  id: string,
};

export type DeleteCourseInput = {
  id: string,
};

export type DeleteEnrollmentInput = {
  id: string,
};

export type DeleteMessageInput = {
  id: string,
};

export type DeleteSubmissionInput = {
  id: string,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type UpdateAnnouncementInput = {
  content?: string | null,
  id: string,
  postedBy?: string | null,
  title?: string | null,
};

export type UpdateAssignmentInput = {
  courseId?: string | null,
  dueDate?: string | null,
  id: string,
  instructions?: string | null,
  title?: string | null,
};

export type UpdateCourseInput = {
  description?: string | null,
  id: string,
  instructorId?: string | null,
  title?: string | null,
};

export type UpdateEnrollmentInput = {
  courseId?: string | null,
  id: string,
  userId?: string | null,
};

export type UpdateMessageInput = {
  body?: string | null,
  id: string,
  receiverId?: string | null,
  senderId?: string | null,
  sentAt?: string | null,
};

export type UpdateSubmissionInput = {
  assignmentId?: string | null,
  fileUrl?: string | null,
  id: string,
  studentId?: string | null,
  submittedAt?: string | null,
};

export type UpdateUserProfileInput = {
  course?: string | null,
  email?: string | null,
  fullName?: string | null,
  id: string,
  medicalUrl?: string | null,
  nextKin?: string | null,
  passportUrl?: string | null,
  phone?: string | null,
  rank?: string | null,
  role?: UserProfileRole | null,
};

export type ModelSubscriptionAnnouncementFilterInput = {
  and?: Array< ModelSubscriptionAnnouncementFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionAnnouncementFilterInput | null > | null,
  postedBy?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAssignmentFilterInput = {
  and?: Array< ModelSubscriptionAssignmentFilterInput | null > | null,
  courseId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  dueDate?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  instructions?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionAssignmentFilterInput | null > | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionCourseFilterInput = {
  and?: Array< ModelSubscriptionCourseFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  instructorId?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionCourseFilterInput | null > | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionEnrollmentFilterInput = {
  and?: Array< ModelSubscriptionEnrollmentFilterInput | null > | null,
  courseId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionEnrollmentFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionMessageFilterInput = {
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  body?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  owner?: ModelStringInput | null,
  receiverId?: ModelSubscriptionStringInput | null,
  senderId?: ModelSubscriptionStringInput | null,
  sentAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionSubmissionFilterInput = {
  and?: Array< ModelSubscriptionSubmissionFilterInput | null > | null,
  assignmentId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  fileUrl?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionSubmissionFilterInput | null > | null,
  owner?: ModelStringInput | null,
  studentId?: ModelSubscriptionStringInput | null,
  submittedAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  course?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  fullName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  medicalUrl?: ModelSubscriptionStringInput | null,
  nextKin?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  owner?: ModelStringInput | null,
  passportUrl?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  rank?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetAnnouncementQueryVariables = {
  id: string,
};

export type GetAnnouncementQuery = {
  getAnnouncement?:  {
    __typename: "Announcement",
    content?: string | null,
    createdAt: string,
    id: string,
    postedBy?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type GetAssignmentQueryVariables = {
  id: string,
};

export type GetAssignmentQuery = {
  getAssignment?:  {
    __typename: "Assignment",
    courseId?: string | null,
    createdAt: string,
    dueDate?: string | null,
    id: string,
    instructions?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "Course",
    createdAt: string,
    description?: string | null,
    id: string,
    instructorId?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type GetEnrollmentQueryVariables = {
  id: string,
};

export type GetEnrollmentQuery = {
  getEnrollment?:  {
    __typename: "Enrollment",
    courseId?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    body?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    receiverId?: string | null,
    senderId?: string | null,
    sentAt?: string | null,
    updatedAt: string,
  } | null,
};

export type GetSubmissionQueryVariables = {
  id: string,
};

export type GetSubmissionQuery = {
  getSubmission?:  {
    __typename: "Submission",
    assignmentId?: string | null,
    createdAt: string,
    fileUrl?: string | null,
    id: string,
    owner?: string | null,
    studentId?: string | null,
    submittedAt?: string | null,
    updatedAt: string,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    course?: string | null,
    createdAt: string,
    email?: string | null,
    fullName?: string | null,
    id: string,
    medicalUrl?: string | null,
    nextKin?: string | null,
    owner?: string | null,
    passportUrl?: string | null,
    phone?: string | null,
    rank?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};

export type ListAnnouncementsQueryVariables = {
  filter?: ModelAnnouncementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAnnouncementsQuery = {
  listAnnouncements?:  {
    __typename: "ModelAnnouncementConnection",
    items:  Array< {
      __typename: "Announcement",
      content?: string | null,
      createdAt: string,
      id: string,
      postedBy?: string | null,
      title?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListAssignmentsQueryVariables = {
  filter?: ModelAssignmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAssignmentsQuery = {
  listAssignments?:  {
    __typename: "ModelAssignmentConnection",
    items:  Array< {
      __typename: "Assignment",
      courseId?: string | null,
      createdAt: string,
      dueDate?: string | null,
      id: string,
      instructions?: string | null,
      title?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      createdAt: string,
      description?: string | null,
      id: string,
      instructorId?: string | null,
      title?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListEnrollmentsQueryVariables = {
  filter?: ModelEnrollmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEnrollmentsQuery = {
  listEnrollments?:  {
    __typename: "ModelEnrollmentConnection",
    items:  Array< {
      __typename: "Enrollment",
      courseId?: string | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      body?: string | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      receiverId?: string | null,
      senderId?: string | null,
      sentAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListSubmissionsQueryVariables = {
  filter?: ModelSubmissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubmissionsQuery = {
  listSubmissions?:  {
    __typename: "ModelSubmissionConnection",
    items:  Array< {
      __typename: "Submission",
      assignmentId?: string | null,
      createdAt: string,
      fileUrl?: string | null,
      id: string,
      owner?: string | null,
      studentId?: string | null,
      submittedAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      course?: string | null,
      createdAt: string,
      email?: string | null,
      fullName?: string | null,
      id: string,
      medicalUrl?: string | null,
      nextKin?: string | null,
      owner?: string | null,
      passportUrl?: string | null,
      phone?: string | null,
      rank?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateAnnouncementMutationVariables = {
  condition?: ModelAnnouncementConditionInput | null,
  input: CreateAnnouncementInput,
};

export type CreateAnnouncementMutation = {
  createAnnouncement?:  {
    __typename: "Announcement",
    content?: string | null,
    createdAt: string,
    id: string,
    postedBy?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateAssignmentMutationVariables = {
  condition?: ModelAssignmentConditionInput | null,
  input: CreateAssignmentInput,
};

export type CreateAssignmentMutation = {
  createAssignment?:  {
    __typename: "Assignment",
    courseId?: string | null,
    createdAt: string,
    dueDate?: string | null,
    id: string,
    instructions?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateCourseMutationVariables = {
  condition?: ModelCourseConditionInput | null,
  input: CreateCourseInput,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "Course",
    createdAt: string,
    description?: string | null,
    id: string,
    instructorId?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateEnrollmentMutationVariables = {
  condition?: ModelEnrollmentConditionInput | null,
  input: CreateEnrollmentInput,
};

export type CreateEnrollmentMutation = {
  createEnrollment?:  {
    __typename: "Enrollment",
    courseId?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  condition?: ModelMessageConditionInput | null,
  input: CreateMessageInput,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    body?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    receiverId?: string | null,
    senderId?: string | null,
    sentAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateSubmissionMutationVariables = {
  condition?: ModelSubmissionConditionInput | null,
  input: CreateSubmissionInput,
};

export type CreateSubmissionMutation = {
  createSubmission?:  {
    __typename: "Submission",
    assignmentId?: string | null,
    createdAt: string,
    fileUrl?: string | null,
    id: string,
    owner?: string | null,
    studentId?: string | null,
    submittedAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: CreateUserProfileInput,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    course?: string | null,
    createdAt: string,
    email?: string | null,
    fullName?: string | null,
    id: string,
    medicalUrl?: string | null,
    nextKin?: string | null,
    owner?: string | null,
    passportUrl?: string | null,
    phone?: string | null,
    rank?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};

export type DeleteAnnouncementMutationVariables = {
  condition?: ModelAnnouncementConditionInput | null,
  input: DeleteAnnouncementInput,
};

export type DeleteAnnouncementMutation = {
  deleteAnnouncement?:  {
    __typename: "Announcement",
    content?: string | null,
    createdAt: string,
    id: string,
    postedBy?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteAssignmentMutationVariables = {
  condition?: ModelAssignmentConditionInput | null,
  input: DeleteAssignmentInput,
};

export type DeleteAssignmentMutation = {
  deleteAssignment?:  {
    __typename: "Assignment",
    courseId?: string | null,
    createdAt: string,
    dueDate?: string | null,
    id: string,
    instructions?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteCourseMutationVariables = {
  condition?: ModelCourseConditionInput | null,
  input: DeleteCourseInput,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "Course",
    createdAt: string,
    description?: string | null,
    id: string,
    instructorId?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteEnrollmentMutationVariables = {
  condition?: ModelEnrollmentConditionInput | null,
  input: DeleteEnrollmentInput,
};

export type DeleteEnrollmentMutation = {
  deleteEnrollment?:  {
    __typename: "Enrollment",
    courseId?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  condition?: ModelMessageConditionInput | null,
  input: DeleteMessageInput,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    body?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    receiverId?: string | null,
    senderId?: string | null,
    sentAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteSubmissionMutationVariables = {
  condition?: ModelSubmissionConditionInput | null,
  input: DeleteSubmissionInput,
};

export type DeleteSubmissionMutation = {
  deleteSubmission?:  {
    __typename: "Submission",
    assignmentId?: string | null,
    createdAt: string,
    fileUrl?: string | null,
    id: string,
    owner?: string | null,
    studentId?: string | null,
    submittedAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: DeleteUserProfileInput,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    course?: string | null,
    createdAt: string,
    email?: string | null,
    fullName?: string | null,
    id: string,
    medicalUrl?: string | null,
    nextKin?: string | null,
    owner?: string | null,
    passportUrl?: string | null,
    phone?: string | null,
    rank?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};

export type UpdateAnnouncementMutationVariables = {
  condition?: ModelAnnouncementConditionInput | null,
  input: UpdateAnnouncementInput,
};

export type UpdateAnnouncementMutation = {
  updateAnnouncement?:  {
    __typename: "Announcement",
    content?: string | null,
    createdAt: string,
    id: string,
    postedBy?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateAssignmentMutationVariables = {
  condition?: ModelAssignmentConditionInput | null,
  input: UpdateAssignmentInput,
};

export type UpdateAssignmentMutation = {
  updateAssignment?:  {
    __typename: "Assignment",
    courseId?: string | null,
    createdAt: string,
    dueDate?: string | null,
    id: string,
    instructions?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateCourseMutationVariables = {
  condition?: ModelCourseConditionInput | null,
  input: UpdateCourseInput,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "Course",
    createdAt: string,
    description?: string | null,
    id: string,
    instructorId?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateEnrollmentMutationVariables = {
  condition?: ModelEnrollmentConditionInput | null,
  input: UpdateEnrollmentInput,
};

export type UpdateEnrollmentMutation = {
  updateEnrollment?:  {
    __typename: "Enrollment",
    courseId?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  condition?: ModelMessageConditionInput | null,
  input: UpdateMessageInput,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    body?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    receiverId?: string | null,
    senderId?: string | null,
    sentAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateSubmissionMutationVariables = {
  condition?: ModelSubmissionConditionInput | null,
  input: UpdateSubmissionInput,
};

export type UpdateSubmissionMutation = {
  updateSubmission?:  {
    __typename: "Submission",
    assignmentId?: string | null,
    createdAt: string,
    fileUrl?: string | null,
    id: string,
    owner?: string | null,
    studentId?: string | null,
    submittedAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: UpdateUserProfileInput,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    course?: string | null,
    createdAt: string,
    email?: string | null,
    fullName?: string | null,
    id: string,
    medicalUrl?: string | null,
    nextKin?: string | null,
    owner?: string | null,
    passportUrl?: string | null,
    phone?: string | null,
    rank?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};

export type OnCreateAnnouncementSubscriptionVariables = {
  filter?: ModelSubscriptionAnnouncementFilterInput | null,
};

export type OnCreateAnnouncementSubscription = {
  onCreateAnnouncement?:  {
    __typename: "Announcement",
    content?: string | null,
    createdAt: string,
    id: string,
    postedBy?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateAssignmentSubscriptionVariables = {
  filter?: ModelSubscriptionAssignmentFilterInput | null,
};

export type OnCreateAssignmentSubscription = {
  onCreateAssignment?:  {
    __typename: "Assignment",
    courseId?: string | null,
    createdAt: string,
    dueDate?: string | null,
    id: string,
    instructions?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    createdAt: string,
    description?: string | null,
    id: string,
    instructorId?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentFilterInput | null,
  owner?: string | null,
};

export type OnCreateEnrollmentSubscription = {
  onCreateEnrollment?:  {
    __typename: "Enrollment",
    courseId?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    body?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    receiverId?: string | null,
    senderId?: string | null,
    sentAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateSubmissionSubscriptionVariables = {
  filter?: ModelSubscriptionSubmissionFilterInput | null,
  owner?: string | null,
};

export type OnCreateSubmissionSubscription = {
  onCreateSubmission?:  {
    __typename: "Submission",
    assignmentId?: string | null,
    createdAt: string,
    fileUrl?: string | null,
    id: string,
    owner?: string | null,
    studentId?: string | null,
    submittedAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    course?: string | null,
    createdAt: string,
    email?: string | null,
    fullName?: string | null,
    id: string,
    medicalUrl?: string | null,
    nextKin?: string | null,
    owner?: string | null,
    passportUrl?: string | null,
    phone?: string | null,
    rank?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteAnnouncementSubscriptionVariables = {
  filter?: ModelSubscriptionAnnouncementFilterInput | null,
};

export type OnDeleteAnnouncementSubscription = {
  onDeleteAnnouncement?:  {
    __typename: "Announcement",
    content?: string | null,
    createdAt: string,
    id: string,
    postedBy?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteAssignmentSubscriptionVariables = {
  filter?: ModelSubscriptionAssignmentFilterInput | null,
};

export type OnDeleteAssignmentSubscription = {
  onDeleteAssignment?:  {
    __typename: "Assignment",
    courseId?: string | null,
    createdAt: string,
    dueDate?: string | null,
    id: string,
    instructions?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    createdAt: string,
    description?: string | null,
    id: string,
    instructorId?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteEnrollmentSubscription = {
  onDeleteEnrollment?:  {
    __typename: "Enrollment",
    courseId?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    body?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    receiverId?: string | null,
    senderId?: string | null,
    sentAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteSubmissionSubscriptionVariables = {
  filter?: ModelSubscriptionSubmissionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSubmissionSubscription = {
  onDeleteSubmission?:  {
    __typename: "Submission",
    assignmentId?: string | null,
    createdAt: string,
    fileUrl?: string | null,
    id: string,
    owner?: string | null,
    studentId?: string | null,
    submittedAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    course?: string | null,
    createdAt: string,
    email?: string | null,
    fullName?: string | null,
    id: string,
    medicalUrl?: string | null,
    nextKin?: string | null,
    owner?: string | null,
    passportUrl?: string | null,
    phone?: string | null,
    rank?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateAnnouncementSubscriptionVariables = {
  filter?: ModelSubscriptionAnnouncementFilterInput | null,
};

export type OnUpdateAnnouncementSubscription = {
  onUpdateAnnouncement?:  {
    __typename: "Announcement",
    content?: string | null,
    createdAt: string,
    id: string,
    postedBy?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateAssignmentSubscriptionVariables = {
  filter?: ModelSubscriptionAssignmentFilterInput | null,
};

export type OnUpdateAssignmentSubscription = {
  onUpdateAssignment?:  {
    __typename: "Assignment",
    courseId?: string | null,
    createdAt: string,
    dueDate?: string | null,
    id: string,
    instructions?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    createdAt: string,
    description?: string | null,
    id: string,
    instructorId?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateEnrollmentSubscription = {
  onUpdateEnrollment?:  {
    __typename: "Enrollment",
    courseId?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    body?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    receiverId?: string | null,
    senderId?: string | null,
    sentAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateSubmissionSubscriptionVariables = {
  filter?: ModelSubscriptionSubmissionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSubmissionSubscription = {
  onUpdateSubmission?:  {
    __typename: "Submission",
    assignmentId?: string | null,
    createdAt: string,
    fileUrl?: string | null,
    id: string,
    owner?: string | null,
    studentId?: string | null,
    submittedAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    course?: string | null,
    createdAt: string,
    email?: string | null,
    fullName?: string | null,
    id: string,
    medicalUrl?: string | null,
    nextKin?: string | null,
    owner?: string | null,
    passportUrl?: string | null,
    phone?: string | null,
    rank?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};
