import { InputPreference } from '../state/appSlice';
import SettingSelect from './components/molecules/SettingSelect';
import { HeightUnit, PressureUnit } from '@adaskothebeast/metric-units';
import Container from '@mui/material/Container/Container';
import Grid from '@mui/material/Grid/Grid';
import useAltitudePressureConversion from '../hooks/useAltitudePressureConversion';

const Settings: React.FC = () => {
  const {
    inputPreference,
    dispatchSetInputPreference,
    altitudeUnit,
    dispatchSetAltitudeUnit,
    pressureUnit,
    dispatchSetPressureUnit,
  } = useAltitudePressureConversion();

  return (
    <Container maxWidth="sm">
      <h1>Settings</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SettingSelect
            keyPart={'press-input'}
            label={'Choose pressure or height'}
            value={inputPreference}
            values={[InputPreference.Altitude, InputPreference.AirPressure]}
            getEnumLabel={
              InputPreference.getLabel as unknown as (
                value: string | number
              ) => string
            }
            onChange={dispatchSetInputPreference}
          />
        </Grid>
        <Grid item xs={12}>
          <SettingSelect
            keyPart={'altitude-unit-input'}
            label={'Choose altitude unit'}
            value={altitudeUnit}
            values={[HeightUnit.Meters, HeightUnit.Feet]}
            getEnumLabel={
              HeightUnit.getLabel as unknown as (
                value: string | number
              ) => string
            }
            onChange={dispatchSetAltitudeUnit}
          />
        </Grid>
        <Grid item xs={12}>
          <SettingSelect
            keyPart={'pressure-unit-input'}
            label={'Choose pressure unit'}
            value={pressureUnit}
            values={[PressureUnit.Pascal, PressureUnit.Bar]}
            getEnumLabel={
              PressureUnit.getLabel as unknown as (
                value: string | number
              ) => string
            }
            onChange={dispatchSetPressureUnit}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Settings;
