import employeeReducer from './slices/employee';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    employee: employeeReducer,
  },
});
