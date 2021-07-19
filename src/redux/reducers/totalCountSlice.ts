import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface PeopleState {
  value: number,
  status: 'idle' | 'loading' | 'failed'
}

const initialState: PeopleState = {
  value: 0,
  status: 'idle'
};

export const totalCountSlice = createSlice({
  name: 'totalCount',
  initialState,
  reducers: {
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    }
  }
});

export const { setTotalCount } = totalCountSlice.actions;

export const selectTotalCount= (state: RootState) => state.totalCount.value;

export default totalCountSlice.reducer;
