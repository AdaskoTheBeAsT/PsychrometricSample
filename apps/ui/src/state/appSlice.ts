import { HeightUnit } from '@adaskothebeast/metric-units/src/HeightUnit';
import { PressureUnit } from '@adaskothebeast/metric-units/src/PressureUnit';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum InputPreference {
  Altitude,
  AirPressure,
}
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace InputPreference {
  export function getLabel(value: InputPreference): string {
    switch (value) {
      case InputPreference.Altitude:
        return 'Altitude';
      case InputPreference.AirPressure:
        return 'Air Pressure';
      default:
        return '';
    }
  }
}

export interface AppState {
  value: number; // value in pascals
  inputPreference: InputPreference;
  altitudeUnit: HeightUnit;
  pressureUnit: PressureUnit;
}

const initialState: AppState = {
  value: 101325,
  inputPreference: InputPreference.AirPressure, // default preference
  altitudeUnit: HeightUnit.Meters,
  pressureUnit: PressureUnit.Pascal,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateAirPressure: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    setInputPreference: (state, action: PayloadAction<InputPreference>) => {
      state.inputPreference = action.payload;
    },
    setAltitudeUnit: (state, action: PayloadAction<HeightUnit>) => {
      state.altitudeUnit = action.payload;
    },
    setPressureUnit: (state, action: PayloadAction<PressureUnit>) => {
      state.pressureUnit = action.payload;
    },
  },
});

export const {
  updateAirPressure,
  setInputPreference,
  setAltitudeUnit,
  setPressureUnit,
} = appSlice.actions;
export default appSlice.reducer;
