import { HeightUnit } from '@adaskothebeast/metric-units/src/HeightUnit';
import { PressureUnit } from '@adaskothebeast/metric-units/src/PressureUnit';
import Container from '@mui/material/Container/Container';
import Grid from '@mui/material/Grid/Grid';

import useAltitudePressureConversion from '../../../hooks/useAltitudePressureConversion';
import { PressureOrAltitudePref } from '../atoms/PressureOrAltitudePref';
import SettingSelect from '../molecules/SettingSelect';

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
            values={[
              PressureOrAltitudePref.Altitude,
              PressureOrAltitudePref.AirPressure,
            ]}
            getEnumLabel={
              PressureOrAltitudePref.getLabel as unknown as (
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
            values={[PressureUnit.Pascal, PressureUnit.inHg]}
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
