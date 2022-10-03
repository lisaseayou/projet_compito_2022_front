// @ts-nocheck

import { IProject } from '../types/Project';
import { IUser } from '../types/User';
import { formatDate } from '../utils';

// labels of each column for tasks list
const TASKS_COLUMNS = [
    // { Header: 'ID', Footer: 'ID', accessor: 'id' },
    { Header: 'Subject', Footer: 'Subject', accessor: 'subject' },
    { Header: 'Status', Footer: 'Status', accessor: 'status' },
    {
        Header: "Etat d'avancement",
        Footer: "Etat d'avancement",
        accessor: 'avancement',
    },
    {
        Header: 'Date de création',
        Footer: 'Date de création',
        accessor: 'createdAt',
        Cell: ({ value }: { value: string }) =>
            formatDate(new Date(value), 'dd/MM/yyyy à h:mm'),
    },
    {
        Header: 'Dernière mise à jour',
        Footer: 'Dernière mise à jour',
        accessor: 'updatedAt',
        Cell: ({ value }: { value: string }) =>
            formatDate(new Date(value), 'dd/MM/yyyy à h:mm'),
    },
    {
        Header: 'Commentaires',
        Footer: 'Commentaires',
        accessor: 'comments',
        Cell: ({ value }: { value: object[] }) => {
            return value?.length;
        },
    },
    {
        Header: 'Users',
        Footer: 'Users',
        accessor: 'users',
        Cell: ({ value }: { value: IUser[] }) => {
            return value?.length;
        },
    },
    {
        Header: 'Projet',
        Footer: 'Projet',
        accessor: 'project',
        Cell: ({ value }: { value: IProject }) => {
            return value?.name;
        },
    },
];

export default TASKS_COLUMNS;
