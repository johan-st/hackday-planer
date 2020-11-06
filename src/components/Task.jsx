import React from 'react';
import { millisElapsedToString, millisToString } from '../helpers';

const Task = ({ task, provided, snapshot, compact }) => {
  // console.log(snapshot);

  if (compact) {
    return (
      <li
        className={`card  
              ${snapshot.isDragging ? 'card--dragging' : ''}
              ${task.blocked ? 'card--blocked' : ''}
              ${compact ? 'card--compact' : ''}
              `}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <h2>
          {task.blocked ? (
            <span className="card__header-notice">blocked</span>
          ) : null}
          {task.title}
        </h2>
      </li>
    );
  }

  return (
    <li
      className={`card  
              ${snapshot.isDragging ? 'card--dragging' : ''}
              ${task.blocked ? 'card--blocked' : ''}
              `}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
    >
      <h2>{task.title}</h2>
      {/* <p>id:{task.id}</p> */}
      {/* <p>{task.desc}</p> */}
      {task.blocked ? <p>:blocked:</p> : null}
      <p>created:{millisToString(task.created)}</p>
      {task.completed ? <p>done:{millisToString(task.completed)}</p> : null}
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
