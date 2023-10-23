import { HeightUnit } from '@adaskothebeast/metric-units/src/HeightUnit';
import { PressureUnit } from '@adaskothebeast/metric-units/src/PressureUnit';
import { TemperatureUnit } from '@adaskothebeast/metric-units/src/TemperatureUnit';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { HumidityPref } from '../app/components/atoms/HumidityPref';
import { PressureOrAltitudePref } from '../app/components/atoms/PressureOrAltitudePref';

export interface SettingsState {
  pressureOrAltitudePref: PressureOrAltitudePref;
  humidityPref: HumidityPref;
  altitudeUnit: HeightUnit;
  pressureUnit: PressureUnit;
  temperatureUnit: TemperatureUnit;
}

const initialState: SettingsState = {
  pressureOrAltitudePref: PressureOrAltitudePref.AirPressure,
  humidityPref: HumidityPref.Relative,
  altitudeUnit: HeightUnit.Meters,
  pressureUnit: PressureUnit.Pascal,
  temperatureUnit: TemperatureUnit.Celsius,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setPressureOrAltitudePref: (
      state,
      action: PayloadAction<PressureOrAltitudePref>
    ) => {
      state.pressureOrAltitudePref = action.payload;
    },
    setHumidityPref: (state, action: PayloadAction<HumidityPref>) => {
      state.humidityPref = action.payload;
    },
    setAltitudeUnit: (state, action: PayloadAction<HeightUnit>) => {
      state.altitudeUnit = action.payload;
    },
    setPressureUnit: (state, action: PayloadAction<PressureUnit>) => {
      state.pressureUnit = action.payload;
    },
    setTemperatureUnit: (state, action: PayloadAction<TemperatureUnit>) => {
      state.temperatureUnit = action.payload;
    },
  },
});

export const {
  setPressureOrAltitudePref,
  setHumidityPref,
  setAltitudeUnit,
  setPressureUnit,
  setTemperatureUnit,
} = settingsSlice.actions;
export default settingsSlice.reducer;
