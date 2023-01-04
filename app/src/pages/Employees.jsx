import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CustomTable from '../components/CustomTable';

export default function Employees() {
  const { list } = useSelector((state) => state.employee);
  const [pageSize, setPageSize] = useState(5);
  const onChangePageSize = (e) => setPageSize(e.target.value);

  return (
    <main className="employees">
      <div className="employees-header">
        <h1>Current Employees</h1>
        <div className="employees-header__content">
          <div className="show-entries">
            <label htmlFor="show">Show</label>
            <select id="show" onChange={onChangePageSize}>
              <option>5</option>
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span>entries</span>
          </div>
          <div className="search">
            <label htmlFor="search">Search:</label>
            <input type="search" name="search" id="search" />
          </div>
        </div>
      </div>
      {list ? <CustomTable data={list} pageSize={pageSize} /> : <></>}
    </main>
  );
}
