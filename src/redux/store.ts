import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { commentsReducer, postsReducer } from './slices';

const rootReducer = combineReducers({
  postsReducer,
  commentsReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export type {
  RootState,
  AppStore,
  AppDispatch,
};
