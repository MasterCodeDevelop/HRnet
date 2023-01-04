import { createSlice } from '@reduxjs/toolkit';
import { list } from '../data/employees';

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    list: list,
  },
  reducers: {
    addNewEmployee: (state, action) => {
      const newEmployee = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        birthDay: action.payload.birthDay,
        startDay: action.payload.startDay,
        department: action.payload.department,
        street: action.payload.street,
        city: action.payload.city,
        state: action.payload.state,
        zipCode: action.payload.zipCode,
      };
      state.list = [...state.list, newEmployee];
      return;
    },
  },
});

const { actions, reducer } = employeeSlice;
export const { addNewEmployee } = actions;
export default reducer;
