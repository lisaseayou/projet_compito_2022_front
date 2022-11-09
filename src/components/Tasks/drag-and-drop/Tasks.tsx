// @ts-nocheck

import { useState } from 'react';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';
import './styles.css';

const initialDatas = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Php', column: 'column-1' },
        'task-2': { id: 'task-2', content: 'React' },
        'task-3': { id: 'task-3', content: 'Symfony' },
        'task-4': { id: 'task-4', content: 'Js' },
        'task-5': { id: 'task-5', content: 'Angular' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'A faire',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'],
        },
        'column-2': {
            id: 'column-2',
            title: 'En cours',
            taskIds: [],
        },
        'column-3': {
            id: 'column-3',
            title: 'Terminées',
            taskIds: [],
        },
    },
    // pour mieux organiser les futurs colonnes
    columnOrder: ['column-1', 'column-2', 'column-3'],
};

const Tasks = () => {
    const [datas, setDatas] = useState(initialDatas);

    

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
