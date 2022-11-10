import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation register($data: AddUserInput!) {
    register(data: $data) {
      id
      name
      email
      createdAt
      updatedAt
      roles
      url
      description
      twitter
      github
      linkedin
    }
  }
`;

export const REQUEST_RESET_PASSWORD = gql`
  mutation requestResetPassword($email: String!) {
    requestResetPassword(email: $email) {
      id
      name
      email
      roles
      resetToken
      resetTokenExpiry
    }
  }
`;

export const REQUEST_PASSWORD = gql`
  mutation ResetPassword(
    $resetToken: String!
    $passwordConfirm: String!
    $password: String!
    $email: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      passwordConfirm: $passwordConfirm
      password: $password
      email: $email
    ) {
      id
      name
      roles
      email
      resetToken
      resetTokenExpiry
    }
  }
`;

export const ADD_TASK = gql`
  mutation Mutation($data: AddTaskInput!) {
    addTask(data: $data) {
      additionalSpentTime
      advancement
      comments {
        id
      }
      createdAt
      documents {
        id
      }
      dueDate
      id
      initialSpentTime
      project {
        id
        name
      }
      status
      subject
      updatedAt
      users {
        id
        name
      }
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation Mutation($data: AddProjectInput!) {
    addProject(data: $data) {
      id
      name
      description
      createdAt
      updatedAt
      tasks {
        id
        subject
        status
      }
      users {
        id
        name
        email
      }
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($deleteProjectId: String!) {
    deleteProject(id: $deleteProjectId) {
      id
      name
      description
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation updateUser($data: UpdateUserInput!, $updateUserId: String!) {
    updateUser(data: $data, id: $updateUserId) {
      id
      name
      email
      roles
      password
      createdAt
      updatedAt
      url
      twitter
      linkedin
      github
      description
    }
  }
`;

export const UPDATE_TASK_STATUS = gql`
  mutation Mutation($data: UpdateTaskInput!, $updateTaskId: String!) {
    updateTask(data: $data, id: $updateTaskId) {
      id
      status
      subject
    }
  }
`;
