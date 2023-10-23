import { HeightUnit } from '@adaskothebeast/metric-units/src/HeightUnit';
import { PressureUnit } from '@adaskothebeast/metric-units/src/PressureUnit';
import { InputLabel } from '@mui/material';
import Container from '@mui/material/Container/Container';
import FormControl from '@mui/material/FormControl/FormControl';
import Grid from '@mui/material/Grid/Grid';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput/OutlinedInput';

import useAltitudePressureConversion from '../../../hooks/useAltitudePressureConversion';
import { PressureOrAltitudePref } from '../atoms/PressureOrAltitudePref';

const Calculation: React.FC = () => {
  const {
    localAltitude,
    setLocalAltitude,
    localPressure,
    setLocalPressure,
    handleAltitudeBlur,
    handlePressureBlur,
    inputPreference,
    pressureUnit,
    altitudeUnit,
  } = useAltitudePressureConversion();

  const renderInput = () => {
    if (inputPreference === PressureOrAltitudePref.Altitude) {
      return (
        <>
          <InputLabel id="altitude-label">Altitude</InputLabel>
          <OutlinedInput
            id="altitude"
            label="altitude-label"
            endAdornment={
              <InputAdornment position="end">
                {HeightUnit.getLabel(altitudeUnit)}
              </InputAdornment>
            }
            aria-describedby="outlined-altitude-helper-text"
            inputProps={{
              'aria-label': 'Altitude',
            }}
            type={'number'}
            value={localAltitude}
            onChange={(e) => setLocalAltitude(parseFloat(e.target.value))}
            onBlur={handleAltitudeBlur}
          />
        </>
      );
    } else {
      return (
        <>
          <InputLabel id="air-pressure-label">Air pressure</InputLabel>
          <OutlinedInput
            id="airpressure"
            label="air-pressure-label"
            endAdornment={
              <InputAdornment position="end">
                {PressureUnit.getLabel(pressureUnit)}
              </InputAdornment>
            }
            aria-describedby="outlined-air-pressure-helper-text"
            inputProps={{
              'aria-label': 'Air pressure',
            }}
            type={'number'}
            value={localPressure}
            onChange={(e) => setLocalPressure(parseFloat(e.target.value))}
            onBlur={handlePressureBlur}
          />
        </>
      );
    }
  };

  return (
    <Container maxWidth="sm">
      <h1>Calculation</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>{renderInput()}</FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Calculation;
