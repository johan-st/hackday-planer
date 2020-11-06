import React, { useState, useContext } from 'react';
import { TASK_ADDED } from '../reducer';
import { GlobalContext } from '../GlobalContext';
import { createTask } from '../http';

const AddTask = (task, snapshot, provided) => {
  const [title, setTitle] = useState(task.title ?? '');
  //   const [desc, setDesc] = useState(task.desc ?? '');
  const onSubmitHandler = e => {
    e.preventDefault();
    createTask(title, res => {
      dispatch(TASK_ADDED(res));
    });
    setTitle('');
  };
  const { dispatch } = useContext(GlobalContext);
  return (
    <form className="add-task" onSubmit={onSubmitHandler}>
      <input
        className="add-task__text-input"
        type="text"
        id="task-title"
        placeholder={task.title ?? 'new task'}
        value={title}
        onChange={e => {
          setTitle(e.target.value);
        }}
        onSubmit={onSubmitHandler}
      />
      {/* <label htmlFor="task-desc">details</label>
      <input type="text" id="task-desc" placeholder={task.desc ?? 'details'} /> */}
      <button className="button">add new task</button>
    </form>
  );
};

export default AddTask;
