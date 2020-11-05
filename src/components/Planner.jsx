import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../GlobalContext';
import { fetchAll } from '../http';
import Tasks from './Tasks';
import AddTask from './AddTask';
import { GOT_TASKS } from '../reducer';

const Planing = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    fetchAll(res => {
      dispatch(GOT_TASKS(res));
    });
  }, [dispatch]);
  return (
    <div className="planner">
      <AddTask />
      <Tasks tasks={state.backlog} title="backlog" />
      <Tasks tasks={state.today} title="today" />
    </div>
  );
};

export default Planing;
