import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import totalCountReducer from './reducers/totalCountSlice';
import loaderReducer from './reducers/loaderSlice';
import peopleReducer from './reducers/peopleSlice';
import pageReducer from './reducers/pageSlice';

export const store = configureStore({
  reducer: {
    totalCount: totalCountReducer,
    isLoading: loaderReducer,
    people: peopleReducer,
    page: pageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
