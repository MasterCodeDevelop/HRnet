import React from 'react';
import { Table } from 'antd';
import { columns } from '../data/employees';
import PropTypes from 'prop-types';

function CustomTable({ data, pageSize }) {
  let dataSource = [];
  data.map((employee, index) => dataSource.push({ key: index, ...employee }));

  return (
    <Table
      className="custom-table"
      pagination={{ pageSize }}
      columns={columns}
      dataSource={dataSource}
    />
  );
}

CustomTable.propTypes = {
  data: PropTypes.array,
  pageSize: PropTypes.number,
};
export default CustomTable;
