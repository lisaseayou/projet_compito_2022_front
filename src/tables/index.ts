import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

// labels of each column for tasks list
const TASKS_COLUMNS = [
    { Header: 'ID', Footer: 'ID', accessor: 'id' },
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
            format(new Date(value), 'dd/MM/yyyy à h:mm', { locale: enUS }),
    },
    {
        Header: 'Dernière mise à jour',
        Footer: 'Dernière mise à jour',
        accessor: 'updatedAt',
        Cell: ({ value }: { value: string }) =>
            format(new Date(value), 'dd/MM/yyyy à h:mm', { locale: enUS }),
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
        Cell: ({ value }: { value: object[] }) => {
            return value?.length;
        },
    },
    {
        Header: 'Projet',
        Footer: 'Projet',
        accessor: 'project',
        Cell: ({ value }: { value: any }) => {
            return value?.name;
        },
    },
];

export default TASKS_COLUMNS;
