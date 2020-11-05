import React from 'react';

const Task = ({ task, provided, snapshot }) => {
  // console.log(snapshot);
  return (
    <li
      className={`card  
              ${snapshot.isDragging ? 'card--dragging' : ''}
              `}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
    >
      <h2>{task.title}</h2>
      <p>id:{task.id}</p>
      <p>{task.desc}</p>
      <p>blocked:{task.blocked}</p>
      <p>created:{task.created.toLocaleString()}</p>
      {task.completed ? <p>done:{task.completed.toLocaleString()}</p> : null}
      <div>scheduled:{task.scheduled.length} times</div>
    </li>
  );
};

export default Task;

//   id: 'MAYBE ID',
//   title: 'STRING',
//   desc: 'STRING',
//   blocked: 'BOOLEAN',
//   created: 'DATE',
//   completed: 'DATE',
//   scheduled: 'LIST DATE',
