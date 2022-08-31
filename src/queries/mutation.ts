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
