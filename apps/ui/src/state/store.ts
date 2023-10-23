import { configureStore } from '@reduxjs/toolkit';

import appReducer from './appSlice';
import settingsReducer from './settingsSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
