import React from 'react';
import states from '../data/states';
import { Select } from '../test/index';

export default function NewEmployee() {
  return (
    <section className="new-employee">
      <h2>Create Employee</h2>
      <form className="form">
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
            <label htmlFor="state">State</label>
            <Select data={states} name="name" />
          </div>

          <div className="form-group">
            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </div>
        </fieldset>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </section>
  );
}
