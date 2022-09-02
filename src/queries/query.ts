import { gql } from '@apollo/client';

export const LOGIN = gql`
    query login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            id
            name
            email
            url
            description
            linkedin
            twitter
            github
        }
    }
`;

export const GET_ALL_PROJECTS = gql`
    query AllProjects {
        allProjects {
            id
            name
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
            description
        }
    }
`;

export const GET_PROJECT = gql`
    query Project($projectId: String!) {
        project(id: $projectId) {
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
            }
        }
    }
`;

export const GET_ALL_TASKS = gql`
    query allTasks {
        allTasks {
            id
            subject
            status
            dueDate
            initialSpentTime
            additionalSpentTime
            advancement
            createdAt
            updatedAt
            project {
                id
                name
            }
            comments {
                id
                comment
            }
            documents {
                id
                name
                size
            }
            users {
                id
                name
                email
            }
        }
    }
`;
