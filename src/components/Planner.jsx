import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import Tasks from './Tasks';

const Planing = () => {
  const { state } = useContext(GlobalContext);
  return (
    <div className="planner">
      <Tasks tasks={state.backlog} title="backlog" />
      <Tasks tasks={state.today} title="today" />
    </div>
  );
};

export default Planing;
