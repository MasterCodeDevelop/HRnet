import React from 'react';
import { useSelector } from 'react-redux';

export default function Employees() {
  const { list } = useSelector((state) => state.employee);
  console.log(list);

  return <main className="employees">Employees</main>;
}
