export enum HumidityPref {
  Specific,
  Relative,
  WetBulbTemperature,
}
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace HumidityPref {
  export function getLabel(value: HumidityPref): string {
    switch (value) {
      case HumidityPref.Specific:
        return 'Specific Humidity';
      case HumidityPref.Relative:
        return 'Relative Humidity';
      case HumidityPref.WetBulbTemperature:
        return 'Wet Bulb Temperature';
      default:
        return '';
    }
  }
}
