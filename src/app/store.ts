import { configureStore } from '@reduxjs/toolkit';
import { homePageReducer } from '../pages/HomePage/redux/homePageSlice';

export const store = configureStore({
  reducer: {
    homePage:homePageReducer,
  } 
});
export type RootState = ReturnType<typeof store.getState>;