import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserResponse } from '../models/UserResponse';

interface CurrentUserState {
  currentUser: UserResponse | undefined;
}

const initialState: CurrentUserState = {
  currentUser: undefined,
};

export interface LogInUserPayload {
  user: UserResponse;
}

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: initialState,
  reducers: {
    logInUser: (state, action: PayloadAction<LogInUserPayload>) => {
      state.currentUser = action.payload.user;
    },
    logOutUser: (state) => {
      state.currentUser = undefined;
    },
  },
});

export const { logInUser } = currentUserSlice.actions;
export const { logOutUser } = currentUserSlice.actions;

export const currentUserReducer = currentUserSlice.reducer;
