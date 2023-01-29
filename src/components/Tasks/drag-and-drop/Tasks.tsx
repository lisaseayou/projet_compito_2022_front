// @ts-nocheck

import {
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';
import './styles.css';
import { StatusEnum, StatusValueEnum } from '../../../enums';
import { UPDATE_TASK_STATUS } from '../../../graphql/mutation';
import { useMutation } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import {
    GET_ALL_TASKS,
    GET_LAST_PROJECTS_UPDATE_BY_USER,
    GET_PROJECT,
    GET_PROJECT_BY_USER,
} from '../../../graphql/query';
import { ITask, ITaskColumn } from '../../../types/Task';

type TasksProps = {
    tasks: ITask[];
    projectId: string;
    showModalNewTask: boolean;
    setShowModalNewTask: Dispatch<SetStateAction<boolean>>;
    setStatus: Dispatch<SetStateAction<string>>;
    expandInfoTask: boolean;
};

const Tasks = ({
    tasks,
    projectId,
    showModalNewTask,
    setShowModalNewTask,
    setStatus,
    expandInfoTask,
}: TasksProps) => {
    const getTasks = useCallback(() => {
        let tasksList = {};

        tasks?.forEach((task) => {
            tasksList = { ...tasksList, [task.id]: task };
        });

        return tasksList;
    }, [tasks]);

    const getTasksIdsByStatus = useCallback(
        (status: StatusEnum) => {
            const ids = [];
            Object.values(getTasks())?.forEach((task) => {
                if (task.status === status) {
                    ids.push(task.id);
                }
            });

            return ids;
        },
        [getTasks]
    );

    const getStatusByColumn = (columnId: string) => {
        switch (columnId) {
            case 'column-1':
                return StatusValueEnum.TO_DO;
            case 'column-2':
                return StatusValueEnum.IN_PROGRESS;
            case 'column-3':
                return StatusValueEnum.FINISH;
            default:
                break;
        }
    };

    const initialDatas = useMemo(
        () => ({
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
        }),
        [getTasks, getTasksIdsByStatus]
    );

    const [datas, setDatas] = useState(initialDatas);
    const [modalUpdateOrDeleteID, setModalUpdateOrDeleteID] = useState('');

    const [updateTaskStatus] = useMutation(UPDATE_TASK_STATUS, {
        onCompleted: () => {},
        onError: () => {},
        refetchQueries: [
            GET_ALL_TASKS,
            GET_PROJECT,
            GET_PROJECT_BY_USER,
            GET_LAST_PROJECTS_UPDATE_BY_USER,
        ],
    });

    useEffect(() => {
        setDatas(initialDatas);
    }, [tasks, initialDatas]);

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
        <>
            <div className="tasks">
                <DragDropContext onDragEnd={onDragEnd}>
                    {datas?.columnOrder?.map((columnId: string) => {
                        const column: ITaskColumn = datas?.columns[columnId];
                        const tasks: ITask[] = column?.taskIds?.map(
                            (taskId: string) => datas.tasks[taskId]
                        );

                        return (
                            <Column
                                key={column.id}
                                column={column}
                                tasks={tasks}
                                showModalNewTask={showModalNewTask}
                                setShowModalNewTask={setShowModalNewTask}
                                setStatus={setStatus}
                                expandInfoTask={expandInfoTask}
                                projectId={projectId}
                                modalUpdateOrDeleteID={modalUpdateOrDeleteID}
                                setModalUpdateOrDeleteID={
                                    setModalUpdateOrDeleteID
                                }
                            />
                        );
                    })}
                </DragDropContext>
            </div>

            <ToastContainer />
        </>
    );
};

export default Tasks;
