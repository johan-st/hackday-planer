import React from 'react';
import Task from './Task';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Tasks = ({ tasks, title, compact }) => {
  return (
    <Droppable droppableId={title}>
      {(provided, snapshot) => {
        // console.log(snapshot);

        return (
          <ul
            className={`task-list  
              ${snapshot.draggingFromThisWith ? 'task-list--drag-source' : ''}
              ${snapshot.draggingOverWith ? 'task-list--drag-destination' : ''}
              ${compact ? 'task-list--compact' : ''}
              `}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <h2>{title}</h2>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided, snapshot) => {
                  return (
                    <Task
                      task={task}
                      provided={provided}
                      snapshot={snapshot}
                      compact={compact}
                    />
                  );
                }}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        );
      }}
    </Droppable>
  );
};

export default Tasks;
