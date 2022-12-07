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
        name
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
  mutation UpdateTask($data: UpdateTaskInput!, $updateTaskId: String!) {
    updateTask(data: $data, id: $updateTaskId) {
      id
      status
      name
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($deleteTaskId: String!) {
  deleteTask(id: $deleteTaskId) {
    id
    name
  }
}
`;

export const ADD_TASK = gql`
  mutation addTask($data: AddTaskInput!) {
  addTask(data: $data) {
    id
    status
    name
    description
    view
  }
}
`;

export const UPDATE_USER_ON_PROJECT = gql`
  mutation updateProject($data: UpdateProjectInput!, $updateProjectId: String!) {
    updateProject(data: $data, id: $updateProjectId) {
      id
      name
      users {
        id
        name
        email
      }
    }
  }
`;

