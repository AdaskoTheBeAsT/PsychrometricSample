import {
  updateAirPressure,
  setInputPreference,
  setAltitudeUnit,
  setPressureUnit,
  InputPreference,
} from '../state/appSlice';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import {
  HeightUnit,
  PressureUnit,
  airPressureFromUnit,
  airPressureToUnit,
  heightFromUnit,
  heightToUnit,
} from '@adaskothebeast/metric-units';
import {
  airPressureToAltitude,
  altitudeToAirPressure,
} from '@adaskothebeast/psychrometrics';
import { useState } from 'react';

const useAltitudePressureConversion = () => {
  const dispatch = useDispatch();
  const {
    value: airPressure,
    inputPreference,
    altitudeUnit,
    pressureUnit,
  } = useSelector((state: RootState) => state.app);

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

  const dispatchSetInputPreference = (preference: InputPreference) => {
    dispatch(setInputPreference(preference));
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
