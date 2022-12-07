import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
    query allUsers {
        allUsers {
            id
            name
            email
        }
    }
`

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

export const GET_USER_BY_RESET_TOKEN = gql`
    query UserByResetToken($resetToken: String!) {
        userByResetToken(resetToken: $resetToken) {
            id
            email
            resetToken
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
                name
                status
                description
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
                name
                status
                description
                view
            }
            users {
                id
                name
            }
        }
    }
`;

export const GET_LAST_PROJECTS_UPDATE_BY_USER = gql`
    query LastProjectByUser($userId: String!, $limit: Float!) {
        lastProjectByUser(userId: $userId, limit: $limit) {
            id
            name
            description
            createdAt
            updatedAt
            tasks {
                id
                name
                description
                status
                dueDate
                initialSpentTime
                additionalSpentTime
                advancement
                createdAt
                updatedAt
            }
        }
    }
`;

export const GET_PROJECT_BY_USER = gql`
    query ProjectsByUser($userId: String!) {
        projectsByUser(userId: $userId) {
            id
            name
            description
            createdAt
            updatedAt
            tasks {
                id
                name
                status
                dueDate
                initialSpentTime
                additionalSpentTime
                advancement
                createdAt
                updatedAt
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
            name
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

export const GET_TASKS_BY_DAY_TODAY = gql`
    query TasksByDay($limit: Float!, $userId: String!) {
        tasksByDay(limit: $limit, userId: $userId) {
            id
            name
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


export const GET_TASKS_BY_PROJECT = gql`
    query TasksByProject($projectId: String!) {
        tasksByProject(projectId: $projectId) {
            id
            name
            status
        }
    }
`;