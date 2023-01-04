import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CustomTable from '../components/CustomTable';
import CustomSelect from '../components/CustomSelect';

export default function Employees() {
  const { list } = useSelector((state) => state.employee);
  const [pageSize, setPageSize] = useState(5);
  const [row, setRow] = useState(list);
  const onSearch = ({ target }) => {
    let data = [];
    list.map((e) => {
      const object = Object.keys(e);
      for (let i = 0; i < object.length; i++) {
        const element = e[object[i]];
        if (element.toLowerCase().includes(target.value.toLowerCase())) {
          data.push(e);
          break;
        }
      }
    });
    setRow(data);
  };
  const showEntries = [{ name: 5 }, { name: 10 }, { name: 25 }, { name: 50 }];

  return (
    <main className="employees">
      <div className="employees-header">
        <h1>Current Employees</h1>
        <div className="employees-header__content">
          <div className="show-entries">
            <label htmlFor="show">Show</label>
            <CustomSelect data={showEntries} setState={setPageSize} />
            <span>entries</span>
          </div>
          <div className="search" onChange={onSearch}>
            <label htmlFor="search">Search:</label>
            <input type="search" name="search" id="search" />
          </div>
        </div>
      </div>
      {list ? <CustomTable data={row} pageSize={pageSize} /> : <></>}
    </main>
  );
}
