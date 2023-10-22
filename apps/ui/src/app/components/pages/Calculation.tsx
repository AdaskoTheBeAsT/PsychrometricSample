import Container from '@mui/material/Container/Container';
import Grid from '@mui/material/Grid/Grid';
import useAltitudePressureConversion from '../../../hooks/useAltitudePressureConversion';
import { InputPreference } from '../../../state/appSlice';
import FormControl from '@mui/material/FormControl/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import { HeightUnit } from '@adaskothebeast/metric-units/src/HeightUnit';
import { PressureUnit } from '@adaskothebeast/metric-units/src/PressureUnit';

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
    if (inputPreference === InputPreference.Altitude) {
      return (
        <OutlinedInput
          id="altitude"
          label="Altitude"
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
      );
    } else {
      return (
        <OutlinedInput
          id="airpressure"
          label="Air pressure"
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
