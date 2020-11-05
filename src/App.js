import './App.css';
import React, { useReducer } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';
import reducer from './reducer';
import Nav from './components/Nav';
import Viewer from './components/Viewer';
import Planner from './components/Planner';
import Dashboard from './components/Dashboard';
import { tasks } from './placeholders';

function App() {
  const [state, dispatch] = useReducer(reducer, { tasks });
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <Router>
        <div className="App">
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
          </Nav>
          <Viewer>
            <Planner />
            <Dashboard />
          </Viewer>
        </div>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
