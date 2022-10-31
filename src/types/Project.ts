import { ITask } from './Task';
import { IUser } from './User';

export interface IProject {
    id: string;
    name: string;
    color: string;
    createdAt: Date;
    updatedAt: Date;
    description: string;
    tasks: ITask[];
    users: IUser[];
    comments: object[];
}

export interface IGetAllProjects {
    allProjects: IProject[];
}

export interface IGetProjectsByUser {
    projectsByUser: IProject[];
}
export interface IGetProject {
    project: IProject;
}

export interface IAddProject {
    addProject: IProject;
}

export interface IDeleteProject {
    addProject: Pick<IProject, 'id' | 'name' | 'description'>;
}

export type CreateProjectVariables = Pick<IProject, 'name' | 'description'>;
