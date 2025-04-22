import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import usersReducer from './reducers/user-reducers';
import appReducer from './reducers/app-reducers';

const rootReducer = combineReducers({
  user: usersReducer,
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
