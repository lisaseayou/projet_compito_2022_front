import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import TaskCard from '../TaskCard';
import './styles.css';

type TaskProps = {
    task: any;
    index: any;
    droppableProvided?: any;
};
const Task = ({ task, index, droppableProvided }: TaskProps) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="task__item"
                >
                    <TaskCard task={task} />
                </div>
            )}
        </Draggable>
    );
};

export default Task;
