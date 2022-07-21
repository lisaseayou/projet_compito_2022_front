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
