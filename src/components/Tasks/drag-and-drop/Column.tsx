import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';
import './styles.css';
import TaskCategory from '../TaskCategory';
import { IProject } from '../../../types/Project';

type ColumnsProps = {
    column: any;
    tasks: any;
    showModalNewTask: boolean;
    setShowModalNewTask: Dispatch<SetStateAction<boolean>>;
    setStatus: Dispatch<SetStateAction<string>>;
    expandInfoTask: boolean;
    projectId: string;
    modalUpdateOrDeleteID: string;
    setModalUpdateOrDeleteID: (value: string) => void;
};
const Column = ({
    column,
    tasks,
    showModalNewTask,
    setShowModalNewTask,
    setStatus,
    expandInfoTask,
    projectId,
    modalUpdateOrDeleteID,
    setModalUpdateOrDeleteID,
}: ColumnsProps) => {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const animation = requestAnimationFrame(() => setEnabled(true));

        return () => {
            cancelAnimationFrame(animation);
            setEnabled(false);
        };
    }, []);

    if (!enabled) {
        return null;
    }

    return (
        <div className="my-0 mx-4 flex-[1]">
            <TaskCategory
                title={column.title}
                tasksLengthByStatus={tasks.length}
                showBtn={column.id !== 'column-3'}
                onClick={() => {
                    setShowModalNewTask(true);
                    setStatus(
                        column.title.toLowerCase() !== 'a faire'
                            ? 'IN_PROGRESS'
                            : 'TO_DO'
                    );
                }}
            />

            <Droppable droppableId={column.id}>
                {(provider) => (
                    <div
                        {...provider.droppableProps}
                        ref={provider.innerRef}
                        className="min-h-[100px]"
                    >
                        {tasks?.map((task: any, index: any) => (
                            <Task
                                key={task.id}
                                task={task}
                                index={index}
                                modalUpdateOrDeleteID={modalUpdateOrDeleteID}
                                setModalUpdateOrDeleteID={
                                    setModalUpdateOrDeleteID
                                }
                                expandInfoTask={expandInfoTask}
                                projectId={projectId}
                            />
                        ))}
                        {provider.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default Column;
