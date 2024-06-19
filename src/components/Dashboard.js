// src/components/Dashboard.js
import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import ValueTable from './ValueTable';
import ValueChart from './ValueChart';
import ValueBarChart from './ValueBarChart';
import ValueRadarChart from './ValueRadarChart';

const Dashboard = () => {
    const { value, incrementValue, generateRandomNumbers } = useContext(AppContext);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Dashboard Component</h1>
      {/* <button className="btn btn-primary" onClick={incrementValue}>
        Increment Value
      </button> */}

      <button className="btn btn-secondary mb-2" onClick={generateRandomNumbers}>
        Generate Random Numbers
      </button>

      {/* <p className="lead">Current: {value}</p> */}
      <ValueTable value={value} />

      <div className="row justify-content-center">
          {/* <ValueChart value={value} />
          <ValueBarChart value={value} /> */}
          <ValueRadarChart value={value} />
      </div>

    </div>
  );
};

export default Dashboard;
