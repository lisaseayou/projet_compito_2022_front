import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ITask } from '../../../types/Task';
import TaskCard from '../TaskCard';
import './styles.css';

type TaskProps = {
    task: ITask;
    index: number;
    modalUpdateOrDeleteID: string;
    setModalUpdateOrDeleteID: (value: string) => void;
    expandInfoTask: boolean;
    projectId: string;
};
const Task = ({
    task,
    index,
    modalUpdateOrDeleteID,
    setModalUpdateOrDeleteID,
    expandInfoTask,
    projectId,
}: TaskProps) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="task__item"
                >
                    <TaskCard
                        task={task}
                        modalUpdateOrDeleteID={modalUpdateOrDeleteID}
                        setModalUpdateOrDeleteID={setModalUpdateOrDeleteID}
                        expandInfoTask={expandInfoTask}
                        projectId={projectId}
                    />
                </div>
            )}
        </Draggable>
    );
};

export default Task;
