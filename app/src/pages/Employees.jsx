import React from 'react';
import { useSelector } from 'react-redux';
import CustomTable from '../components/Table';

export default function Employees() {
  const { list } = useSelector((state) => state.employee);

  return (
    <main className="employees">
      <div className="employees-header">
        <h1>Current Employees</h1>;
      </div>
      {list ? <CustomTable data={list} /> : <></>}
    </main>
  );
}
