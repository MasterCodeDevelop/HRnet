import employeesReducer from './slices/employees';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    employees: employeesReducer,
  },
});
