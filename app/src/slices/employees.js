import { createSlice } from '@reduxjs/toolkit';
const initialState = [
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
const employeesSlice = createSlice({
  name: 'employees',
  initialState: initialState,
  reducers: {
    addNewEmployee: (state, action) => {
      const newEmployee = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        dateOfBirth: action.payload.dateOfBirth,
        startDate: action.payload.startDate,
        department: action.payload.department,
        street: action.payload.street,
        city: action.payload.city,
        state: action.payload.state,
        zipCode: action.payload.zipCode,
      };
      state = [...state, newEmployee];
      return;
    },
  },
});

const { actions, reducer } = employeesSlice;
export const { addNewEmployee } = actions;
export default reducer;
