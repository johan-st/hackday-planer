import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import Tasks from './Tasks';

const Planing = () => {
  const { state } = useContext(GlobalContext);
  return (
    <div>
      <Tasks tasks={state.tasks} title="backlog" />
      <Tasks tasks={state.tasks} title="today" />
    </div>
  );
};

export default Planing;
