import React from 'react';
import { Table } from 'antd';
import { columns } from '../data/employees';
import PropTypes from 'prop-types';

function CustomTable({ data }) {
  let dataSource = [];
  data.map((employee, index) => dataSource.push({ key: index, ...employee }));

  return (
    <div>
      <header>
        <Table columns={columns} dataSource={dataSource}></Table>
      </header>
    </div>
  );
}

CustomTable.propTypes = {
  data: PropTypes.array,
};
export default CustomTable;
