import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'redux/users/usersSlice';

const store = configureStore({
  reducer: userReducer,
});

console.log(store);

export default store;
