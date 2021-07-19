import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface PeopleState {
  value: Array<string>,
  status: 'idle' | 'loading' | 'failed'
}

const initialState: PeopleState = {
  value: [],
  status: 'idle'
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setPeople: (state, action: PayloadAction<Array<string>>) => {
      state.value = action.payload;
    }
  }
});

export const { setPeople } = peopleSlice.actions;

export const selectPeople = (state: RootState) => state.people.value;

export default peopleSlice.reducer;
