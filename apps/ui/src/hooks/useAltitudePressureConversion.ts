import {
  airPressureFromUnit,
  airPressureToUnit,
} from '@adaskothebeast/metric-units/src/air-pressure';
import {
  heightFromUnit,
  heightToUnit,
} from '@adaskothebeast/metric-units/src/height';
import { HeightUnit } from '@adaskothebeast/metric-units/src/HeightUnit';
import { PressureUnit } from '@adaskothebeast/metric-units/src/PressureUnit';
import { airPressureToAltitude } from '@adaskothebeast/psychrometrics/src/air-pressure-to-altitude';
import { altitudeToAirPressure } from '@adaskothebeast/psychrometrics/src/altitude-to-air-pressure';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PressureOrAltitudePref } from '../app/components/atoms/PressureOrAltitudePref';
import { updateAirPressure } from '../state/appSlice';
import {
  setAltitudeUnit,
  setPressureOrAltitudePref,
  setPressureUnit,
} from '../state/settingsSlice';
import { RootState } from '../state/store';

const useAltitudePressureConversion = () => {
  const dispatch = useDispatch();
  const { value: airPressure } = useSelector((state: RootState) => state.app);
  const {
    pressureOrAltitudePref: inputPreference,
    altitudeUnit,
    pressureUnit,
  } = useSelector((state: RootState) => state.settings);

  const calculateAltitude = (airPressure: number, altitudeUnit: HeightUnit) => {
    return heightToUnit(altitudeUnit, airPressureToAltitude(airPressure));
  };

  const convertPressure = (airPressure: number, pressureUnit: PressureUnit) => {
    return airPressureToUnit(pressureUnit, airPressure);
  };

  const [localAltitude, setLocalAltitude] = useState<number>(
    calculateAltitude(airPressure, altitudeUnit)
  );
  const [localPressure, setLocalPressure] = useState<number>(
    convertPressure(airPressure, pressureUnit)
  );

  const handleAltitudeBlur = () => {
    const newBaseAltitude = heightFromUnit(altitudeUnit, localAltitude);
    const newPressure = altitudeToAirPressure(newBaseAltitude);
    dispatch(updateAirPressure(newPressure));
  };

  const handlePressureBlur = () => {
    const newBasePressure = airPressureFromUnit(pressureUnit, localPressure);
    dispatch(updateAirPressure(newBasePressure));
  };

  const dispatchSetInputPreference = (preference: PressureOrAltitudePref) => {
    dispatch(setPressureOrAltitudePref(preference));
  };

  const dispatchSetAltitudeUnit = (unit: HeightUnit) => {
    dispatch(setAltitudeUnit(unit));
  };

  const dispatchSetPressureUnit = (unit: PressureUnit) => {
    dispatch(setPressureUnit(unit));
  };

  return {
    localAltitude,
    setLocalAltitude,
    localPressure,
    setLocalPressure,
    handleAltitudeBlur,
    handlePressureBlur,
    inputPreference,
    dispatchSetInputPreference,
    altitudeUnit,
    dispatchSetAltitudeUnit,
    pressureUnit,
    dispatchSetPressureUnit,
  };
};

export default useAltitudePressureConversion;
