import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

function CustomSelect({ data, setState }) {
  return (
    <Select
      defaultValue={data[0].name}
      className="custom-select"
      onChange={(e) => setState(e)}
    >
      {data &&
        data.length > 0 &&
        data.map((e) => (
          <Select.Option key={e.name} value={e.name}>
            {e.name}
          </Select.Option>
        ))}
    </Select>
  );
}
CustomSelect.propTypes = {
  data: PropTypes.array,
  setState: PropTypes.func,
};
export default CustomSelect;
