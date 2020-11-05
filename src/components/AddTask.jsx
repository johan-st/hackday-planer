import React, { useState, useContext } from 'react';
import { GOT_TASKS } from '../reducer';
import { GlobalContext } from '../GlobalContext';
import { createTask } from '../http';

const AddTask = task => {
  const [title, setTitle] = useState(task.title ?? '');
  //   const [desc, setDesc] = useState(task.desc ?? '');
  const { dispatch } = useContext(GlobalContext);
  return (
    <form>
      <label htmlFor="task-title">title</label>
      <input
        type="text"
        id="task-title"
        placeholder={task.title ?? 'title'}
        value={title}
        onChange={e => {
          setTitle(e.target.value);
        }}
        onSubmit={e => {
          e.prevenrtDefaults();
          createTask(res => {
            dispatch(GOT_TASKS(res));
          });
        }}
      />
      {/* <label htmlFor="task-desc">details</label>
      <input type="text" id="task-desc" placeholder={task.desc ?? 'details'} /> */}
    </form>
  );
};

export default AddTask;
