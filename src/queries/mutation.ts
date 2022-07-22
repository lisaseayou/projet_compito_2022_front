import { gql } from '@apollo/client';

export const REGISTER = gql`
    mutation register(
        $name: String!
        $roles: [String!]!
        $password: String!
        $email: String!
    ) {
        register(
            name: $name
            roles: $roles
            password: $password
            email: $email
        ) {
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
    mutation addTask(
        $subject: String!
        $status: String!
        $dueDate: String!
        $initialSpentTime: Int!
        $additionalSpentTime: [Int!]!
        $advancement: Int!
        $projectId: String!
        $userId: String!
    ) {
        addTask(
            subject: $subject
            status: $status
            dueDate: $dueDate
            initialSpentTime: $initialSpentTime
            additionalSpentTime: $additionalSpentTime
            advancement: $advancement
            projectId: $projectId
            userId: $userId
        ) {
            id
            subject
            status
        }
    }
`;

export const ADD_PROJECT = gql`
    mutation AddProject(
        $name: String!
        $userId: String!
        $description: String!
    ) {
        addProject(name: $name, userId: $userId, description: $description) {
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
