import React, { useState } from 'react';
import states from '../data/states';
import departments from '../data/departments';
import { Modal, ModalHeader, ModalBody } from '../plugin/components/Modal';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as employeeActions from '../slices/employee';
import { DatePicker } from 'antd';
import CustomSelect from './CustomSelect';

const pattern = {
  name: '[A-z]{2,24}([ -]{1}[A-z]{1,24})?',
};
export default function NewEmployee() {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const [selectStates, setSelectStates] = useState(states[0].name);
  const [selectDepartments, setSelectDepartments] = useState(
    departments[0].name
  );

  const onSubmit = (e) => {
    e.preventDefault();
    setOpenModal(true);
    const data = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      birthDay: e.target[2].value,
      startDay: e.target[3].value,
      street: e.target[5].value,
      city: e.target[6].value,
      state: selectStates,
      zipCode: e.target[8].value,
      department: selectDepartments,
    };
    dispatch(employeeActions.addNewEmployee(data));
  };
  return (
    <section className="new-employee">
      <h2>Create Employee</h2>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            pattern={pattern.name}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            pattern={pattern.name}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="birthDay">Date of Birth</label>
          <DatePicker id="birthDay" format="MM-DD-YYYY" />
        </div>
        <div className="form-group">
          <label htmlFor="startDay">Start Day</label>
          <DatePicker id="startDay" format="MM-DD-YYYY" />
        </div>
        <fieldset className="address">
          <legend>Address</legend>

          <div className="form-group">
            <label htmlFor="street">Street</label>
            <input id="street" type="text" pattern={pattern.name} required />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input id="city" type="text" pattern={pattern.name} required />
          </div>

          <div className="form-group">
            <label htmlFor="state">State </label>
            <CustomSelect data={states} setState={setSelectStates} />
          </div>

          <div className="form-group">
            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" required />
          </div>
        </fieldset>

        <div className="form-group">
          <label htmlFor="department">Department </label>
          <CustomSelect data={departments} setState={setSelectDepartments} />
        </div>
        <button type="submit" className="btn btn-secondary">
          Save
        </button>
      </form>

      <Modal close={() => setOpenModal(false)} isOpen={openModal}>
        <ModalHeader
          close={() => setOpenModal(false)}
          title="The employee is to be added"
        />
        <ModalBody>
          You can see the list of employees by clicking on the link below.
          <NavLink className="btn btn-secondary" to="/employees">
            View Current Employees
          </NavLink>
        </ModalBody>
      </Modal>
    </section>
  );
}
