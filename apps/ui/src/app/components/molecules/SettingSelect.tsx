import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Select from '@mui/material/Select/Select';

export interface SettingSelectProps<T> {
  keyPart: string;
  label: string;
  value: T;
  values: T[];
  onChange: (value: T) => void;
  getEnumLabel: (value: T) => string;
}

const SettingSelect = <T,>({
  keyPart,
  label,
  value,
  values,
  onChange,
  getEnumLabel,
}: SettingSelectProps<T>) => {
  const labelId = `${keyPart}-label`;

  // Create a lookup object to map string values back to enum values
  const valueLookup = Object.fromEntries(
    values.map((value) => [String(value), value])
  );

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id="demo-simple-select"
        value={String(value)} // Convert enum value to string
        label={label}
        onChange={(evt) => {
          const enumValue = valueLookup[evt.target.value];
          onChange(enumValue);
        }}
      >
        {values.map((value, index) => (
          <MenuItem key={`${keyPart}-${index}`} value={String(value)}>
            {' '}
            {/* Convert enum value to string */}
            {getEnumLabel(value)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SettingSelect;
