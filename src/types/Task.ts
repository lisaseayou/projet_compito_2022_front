import { IProject } from './Project';
import { IUser } from './User';

export interface ITask {
    id: string;
    subject: string;
    status: string;
    dueDate: string;
    initialSpentTime: number;
    additionalSpentTime: number[];
    advancement: number;
    createdAt: Date;
    updatedAt: Date;
    project: IProject;
    users: IUser[];
}

export interface IAddTask {
    addProject: IProject;
}
