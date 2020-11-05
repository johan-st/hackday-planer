import React from 'react';
// import Task from './Task';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Tasks = ({ tasks }) => {
  return (
    <DragDropContext>
      <Droppable droppableId="tasks   ">
        {provided => {
          return (
            <ul
              className="tasks"
              {...provided.droppableProps}
              innerRef={provided.innerRef}
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {provided => {
                    return (
                      <li
                        className="card"
                        {...provided.dragableProps}
                        {...provided.dragHandlePrps}
                        ref={provided.xinnerRef}
                      >
                        {task.title}
                      </li>
                    );
                  }}
                </Draggable>
              ))}
            </ul>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default Tasks;
