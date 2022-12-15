import { configureStore } from '@reduxjs/toolkit';
import { currentUserReducer } from './currentUserSlice';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
  }, //add reducers here
});

export type RootState = ReturnType<typeof store.getState>;
