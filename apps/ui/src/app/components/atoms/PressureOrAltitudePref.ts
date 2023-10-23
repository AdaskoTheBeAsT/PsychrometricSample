export enum PressureOrAltitudePref {
  Altitude,
  AirPressure,
}
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace PressureOrAltitudePref {
  export function getLabel(value: PressureOrAltitudePref): string {
    switch (value) {
      case PressureOrAltitudePref.Altitude:
        return 'Altitude';
      case PressureOrAltitudePref.AirPressure:
        return 'Air Pressure';
      default:
        return '';
    }
  }
}
