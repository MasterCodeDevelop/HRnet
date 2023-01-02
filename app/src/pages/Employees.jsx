import React from 'react';
import { useSelector } from 'react-redux';

export default function Employees() {
  const employees = useSelector((state) => state.employees);
  console.log(employees);

  return <main className="employees">Employees</main>;
}
