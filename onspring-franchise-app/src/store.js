// store.js
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './auth/loginSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;      
export { store };         