// src/components/ValueTable.js
import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const ValueTable = () => {
  const { value, randomNumbers } = useContext(AppContext);

  return (
    <div>

      <table className="table table-bordered my-4">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Random Number 1</th>
            <th scope="col">Random Number 2</th>
            <th scope="col">Random Number 3</th>
            <th scope="col">Random Number 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{randomNumbers[0]}</td>
            <td>{randomNumbers[1]}</td>
            <td>{randomNumbers[2]}</td>
            <td>{randomNumbers[3]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ValueTable;
