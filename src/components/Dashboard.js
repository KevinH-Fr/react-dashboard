// src/components/Dashboard.js
import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import ValueTable from './ValueTable';
import ValueChart from './ValueChart';
import ValueBarChart from './ValueBarChart';


const Dashboard = () => {
    const { value, incrementValue } = useContext(AppContext);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Dashboard Component</h1>
      <button className="btn btn-primary" onClick={incrementValue}>
        Increment Value
      </button>
      <p className="lead">Current: {value}</p>
      <ValueTable value={value} />

      <div className="row">
        <div className="col-md-6 h-100">
          <ValueChart value={value} />
        </div>
        <div className="col-md-6 h-100">
          <ValueBarChart value={value} />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
