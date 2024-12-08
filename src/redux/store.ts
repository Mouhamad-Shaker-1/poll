import { configureStore } from '@reduxjs/toolkit';
import formUserInfoReducer from './formUserInfoSlice';  
import moodReducer from "./moodSlice"; 
import pollsReducer from './pollsSlice';

export const store = configureStore({
  reducer: {
    formUserInfo: formUserInfoReducer,
    mood: moodReducer,
    polls: pollsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
