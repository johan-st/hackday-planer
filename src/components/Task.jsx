import React from 'react';

const Task = ({ task }) => {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.desc}</p>
      <p>blocked:{task.blocked}</p>
      <p>created:{task.created.toLocaleString}</p>
      <p>done:{task.completed}</p>
      <p>scheduled:{task.scheduled}</p>
    </div>
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
