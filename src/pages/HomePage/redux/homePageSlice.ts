import { News } from '../../../models/News';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NewsResponse } from '../../../models/NewsResponse';

interface ICards {
  id: number;
  header: string;
  date: string;
  imageSrc: string;
  page: string;
}

interface HomePageState {
  result: number;
  news: NewsResponse[];
}

const initialState: HomePageState = {
  news: [],
  result: 0,
};
interface setNewsPayload {
  news: NewsResponse[];
}
export const homePageSlice = createSlice({
  name: 'homePage',
  initialState: initialState,
  reducers: {
    changeResult: (state, action: PayloadAction<number>) => {
      state.result = action.payload;
    },
    // showNews: (state, action: PayloadAction<News>) => {},
    setNews: (state, action: PayloadAction<setNewsPayload>) => {
      state.news = action.payload.news;
    },
  },
});

export const { changeResult } = homePageSlice.actions;
export const { setNews } = homePageSlice.actions;

export const homePageReducer = homePageSlice.reducer;
