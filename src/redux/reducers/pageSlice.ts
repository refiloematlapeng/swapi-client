import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface PageState {
  value: number,
  status: 'idle' | 'loading' | 'failed'
};

const initialState: PageState = {
  value: 1,
  status: 'idle'
};

export const pageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.value += 1;
    },
    previousPage: (state) => {
      state.value -= 1;
    },
    actualPage: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    }
  }
});

export const { nextPage, previousPage, actualPage } = pageSlice.actions;

export const selectPage = (state: RootState) => state.page.value;

export default pageSlice.reducer;