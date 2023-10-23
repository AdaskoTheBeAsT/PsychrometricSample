import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AppState {
  value: number;
}

const initialState: AppState = {
  value: 101325,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateAirPressure: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { updateAirPressure } = appSlice.actions;
export default appSlice.reducer;
