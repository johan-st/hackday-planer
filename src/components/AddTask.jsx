import React, { useState, useContext } from 'react';
import { TASK_ADDED } from '../reducer';
import { GlobalContext } from '../GlobalContext';
import { createTask } from '../http';

const AddTask = task => {
  const [title, setTitle] = useState(task.title ?? '');
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
      <button className="button add-task__button">add new task</button>
    </form>
  );
};

export default AddTask;
