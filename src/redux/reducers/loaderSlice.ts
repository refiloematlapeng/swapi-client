import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface LoaderState {
  value: boolean,
  status: 'idle' | 'loading' | 'failed'
};

const initialState: LoaderState = {
  value: false,
  status: 'idle'
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    }
  }
});

export const { setIsLoading } = loaderSlice.actions;

export const selectIsLoading = (state: RootState) => state.isLoading.value;

export default loaderSlice.reducer;
