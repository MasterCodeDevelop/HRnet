import React, { useState } from 'react';
import { states, departments } from '../data/states';
import { Modal, ModalHeader, ModalBody } from '../plugin/components/Modal';
import { NavLink } from 'react-router-dom';

export default function NewEmployee() {
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setOpenModal(true);
    console.log(e);
  };
  return (
    <section className="new-employee">
      <h2>Create Employee</h2>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName"></input>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName"></input>
        </div>
        <div className="form-group">
          <label htmlFor="birthDay">Date of Birth</label>
          <input type="date" id="birthDay"></input>
        </div>
        <div className="form-group">
          <label htmlFor="startDay">Start Day</label>
          <input type="date" id="startDay"></input>
        </div>
        <fieldset className="address">
          <legend>Address</legend>

          <div className="form-group">
            <label htmlFor="street">Street</label>
            <input id="street" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input id="city" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="state">State </label>
            <select name="state" id="state">
              <option disabled> Select state </option>
              {states &&
                states.length > 0 &&
                states.map((e, index) => <option key={index}>{e.name}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </div>
        </fieldset>

        <div className="form-group">
          <label htmlFor="department">Department </label>
          <select name="department" id="department">
            <option disabled> Select department </option>
            {departments &&
              departments.length > 0 &&
              departments.map((e, index) => (
                <option key={index}>{e.name}</option>
              ))}
          </select>
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
