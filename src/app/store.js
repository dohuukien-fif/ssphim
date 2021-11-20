import { configureStore } from '@reduxjs/toolkit';
const rootReducer = {
  // counter: counterSlice,
  // user: userSlice,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
