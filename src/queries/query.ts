import { gql } from '@apollo/client';

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
        }
    }
`;