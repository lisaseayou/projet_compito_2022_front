import { gql } from '@apollo/client';

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

export const ADD_TASK = gql`
    mutation addTask($data: AddTaskInput!) {
        addTask(data: $data) {
            id
            subject
            status
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
 `