import { configureStore } from '@reduxjs/toolkit';
import { currentUserReducer } from './currentUserSlice';
import { homePageReducer } from '../pages/HomePage/redux/homePageSlice';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    homePage: homePageReducer,
  }, //add reducers here
});

export type RootState = ReturnType<typeof store.getState>;
