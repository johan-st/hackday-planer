import React from 'react';

const Task = ({ task, provided }) => {
  return (
    <li
      className="card"
      {...provided.dragableProps}
      {...provided.dragHandlePrps}
      ref={provided.innerRefs}
    >
      <h2>{task.title}</h2>
      <p>id:{task.id}</p>
      <p>{task.desc}</p>
      <p>blocked:{task.blocked}</p>
      {/* <p>created:{task.created.toLocaleString()}</p>
      {task.completed ? <p>done:{task.completed.toLocaleString()}</p> : <></>}
      {task.scheduled.length > 0 ? (
        <div>
          scheduled:
          {task.scheduled.map((d, i) => (
            <p key={i}>{d.toLocaleString()}</p>
          ))}
        </div>
      ) : (
        <></>
      )} */}
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
