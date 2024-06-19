// src/components/ValueTable.js
import React from 'react';

const ValueTable = ({ value }) => {
  return (
    <table className="table table-bordered my-4">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Value: {value}</th>
          <th scope="col"> coef2 </th>
          <th scope="col"> coef3 </th>
          <th scope="col"> coef4 </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{value}</td>
          <td>{2 * value}</td>
          <td>{3 * value}</td>
          <td>{4 * value}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ValueTable;
