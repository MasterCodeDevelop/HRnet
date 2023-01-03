import { createSlice } from '@reduxjs/toolkit';

const initialList = [
  {
    firstName: 'Mohamed Ali',
    lastName: 'EL HAMECH',
    birthDay: '1999-05-25',
    startDay: '2022-12-31',
    department: 'Engeneering',
    street: '01 rue amiral de grasse',
    city: 'Grasse',
    state: 'France',
    zipCode: '06130',
  },
];

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    list: initialList,
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
