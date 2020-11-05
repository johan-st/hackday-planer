import React, { useState } from 'react';
import Task from './Task';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Tasks = ({ tasks, title }) => {
  const [list, setList] = useState(tasks);

  const handleDragEnd = result => {
    if (!result.destination) {
      console.log('No Destination on drag end');
      return;
    }
    const [reorderedItem] = list.splice(result.source.index, 1);
    list.splice(result.destination.index, 0, reorderedItem);
    setList(list);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="{title}">
        {(provided, snapshot) => {
          console.log(snapshot);
          return (
            <section>
              <ul
                className="tasks"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h2>{title}</h2>
                {list.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {provided => {
                      return <Task task={task} provided={provided} />;
                    }}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            </section>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default Tasks;
