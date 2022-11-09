// @ts-nocheck

import { useState } from 'react';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';
import './styles.css';
import { StatusEnum } from '../../../enums';
import { UPDATE_TASK_STATUS } from '../../../graphql/mutation';
import { useMutation } from '@apollo/client';

type TasksProps = {
    tasks: any;
    projectId: any;
};

const Tasks = ({ tasks, projectId }: TasksProps) => {
    const getTasks = () => {
        let tasksList = {};

        tasks?.forEach((task) => {
            tasksList = { ...tasksList, [task.id]: task };
        });

        return tasksList;
    };

    const getTasksIdsByStatus = (status: StatusEnum) => {
        const ids = [];
        Object.values(getTasks())?.forEach((task) => {
            if (task.status === status) {
                ids.push(task.id);
            }
        });

        return ids;
    };

    const getStatusByColumn = (columnId: any) => {
        switch (columnId) {
            case 'column-1':
                return StatusEnum.TO_DO;
            case 'column-2':
                return StatusEnum.IN_PROGRESS;
            case 'column-3':
                return StatusEnum.FINISH;
            default:
                break;
        }
    };

    const initialDatas = {
        tasks: getTasks(),
        columns: {
            'column-1': {
                id: 'column-1',
                title: 'A faire',
                taskIds: getTasksIdsByStatus(StatusEnum.TO_DO),
            },
            'column-2': {
                id: 'column-2',
                title: 'En cours',
                taskIds: getTasksIdsByStatus(StatusEnum.IN_PROGRESS),
            },
            'column-3': {
                id: 'column-3',
                title: 'Terminées',
                taskIds: getTasksIdsByStatus(StatusEnum.FINISH),
            },
        },
        // pour mieux organiser les futurs colonnes
        columnOrder: ['column-1', 'column-2', 'column-3'],
    };

    const [datas, setDatas] = useState(initialDatas);

    const [updateTaskStatus] = useMutation(UPDATE_TASK_STATUS, {
        onCompleted: () => {},
        onError: () => {},
        // refetchQueries: [GET_ALL_TASKS],
    });

    const onDragEnd = (result: any) => {
        const { destination, source, draggableId } = result;

        // on check la possition si c'est pas en dehors du cadre - sinon on arrete l'execution de la fonction
        if (!destination) {
            return;
        }
        // on check si la destination n'est pas la meme que la source
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        // partie 2 multiples colonnes
        // on check si la colonne source et la meme que la colonne de destination

        const start = datas.columns[source.droppableId];
        const finish = datas.columns[destination.droppableId];

        if (start === finish) {
            console.log('meme colonne');

            // on va chercher la colonne de tache qui nous interesse
            const column = datas.columns[source.droppableId];
            // on choppe les ids des taches actuelles
            const newTaskIds = Array.from(column.taskIds);
            // on remplace les places dans l'array
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);
            // on crée une copie de la colonne de tache modifiée
            const newColumn = {
                ...column,
                taskIds: newTaskIds,
            };
            // et on met à jour le state
            const newState = {
                ...datas,
                columns: {
                    ...datas.columns,
                    [newColumn.id]: newColumn,
                },
            };
            setDatas(newState);
            return;
        }

        // Si on bouge les éléments dans une autre colonne
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };
        updateTaskStatus({
            variables: {
                data: {
                    status: getStatusByColumn(destination.droppableId),
                    projectId,
                },
                updateTaskId: draggableId,
            },
        });

        console.log(destination);

        const newState = {
            ...datas,
            columns: {
                ...datas.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };
        setDatas(newState);
    };

    return (
        <div className="tasks">
            <DragDropContext onDragEnd={onDragEnd}>
                {datas.columnOrder.map((columnId: any) => {
                    const column = datas.columns[columnId];
                    const tasks = column.taskIds.map(
                        (taskId: any) => datas.tasks[taskId]
                    );
                    return (
                        <Column key={column.id} column={column} tasks={tasks} />
                    );
                })}
            </DragDropContext>
        </div>
    );
};

export default Tasks;
