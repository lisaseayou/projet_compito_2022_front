import React, { useEffect, useState } from 'react';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';
import './styles.css';

type ColumnsProps = {
    column: any;
    tasks: any;
};
const Column = ({ column, tasks }: ColumnsProps) => {
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
        <div className="tasks__column">
            <h2>{column.title}</h2>
            <Droppable droppableId={column.id}>
                {(provider) => (
                    <div
                        {...provider.droppableProps}
                        ref={provider.innerRef}
                        className="tasks__list"
                    >
                        {tasks?.map((task: any, index: any) => (
                            <Task key={task.id} task={task} index={index} />
                        ))}
                        {provider.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default Column;
