import { StatusEnum } from './../enums/index';
import { IProject } from './Project';
import { IUser } from './User';

export interface ITask {
    id: string;
    name: string;
    description: string;
    view: string
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

export interface IDeleteTask {
    addProject: Pick<ITask, 'id' | 'name'>;
}

export interface ITaskColumn {
    id: string
    title: StatusEnum,
    taskIds: string[],
}
