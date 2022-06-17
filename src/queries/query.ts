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
            description
        }
    }
`;

export const GET_PROJECT = gql`
query Project($projectId: ID!) {
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
