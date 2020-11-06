import React from 'react';
import Task from './Task';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Editor = ({ tasks, title }) => {
  return (
    <Droppable droppableId={title} isDropDisabled={tasks.length > 0}>
      {(provided, snapshot) => {
        return (
          <ul
            className={`editor task-list  
              ${snapshot.draggingFromThisWith ? 'task-list--drag-source' : ''}
              ${snapshot.draggingOverWith ? 'task-list--drag-destination' : ''}
              `}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <h2>{title}</h2>
            {tasks.map((task, index) =>
              index === 0 ? (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => {
                    return (
                      <Task
                        task={task}
                        provided={provided}
                        snapshot={snapshot}
                        editable={true}
                      />
                    );
                  }}
                </Draggable>
              ) : null
            )}
            {provided.placeholder}
          </ul>
        );
      }}
    </Droppable>
  );
};

export default Editor;
