import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../features/authenticationSlice';
import productsCartReducer from '../features/productsCartSlice';

export const store = configureStore({
  reducer: {
    isAuthenticated: authenticationReducer,
    productsCart: productsCartReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch