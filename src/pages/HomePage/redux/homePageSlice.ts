import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface HomePageState {
  result: number;
}

const initialState: HomePageState = {
  result: 0,
};

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState: initialState,
  reducers: {
    changeResult: (state, action: PayloadAction<number>) => {
      state.result = action.payload;
    },
  },
});

export const { changeResult } = homePageSlice.actions;

export const homePageReducer = homePageSlice.reducer;
