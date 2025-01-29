const DISTANCE_UNITS = ["meter", "kilometer", "mile", "yard"];
const TIME_UNITS = ["second", "minute", "hour", "day"];

// Helper function to get value and unit for distance
const getDistanceValueAndUnit = (n) => {
  const i = n === 0 ? 0 : Math.floor(Math.log(n) / Math.log(1000));
  const value = n / Math.pow(1000, i);
  return { value, unit: DISTANCE_UNITS[i] };
};

// Helper function to get value and unit for time
const getTimeValueAndUnit = (n) => {
  const i = n === 0 ? 0 : Math.floor(Math.log(n) / Math.log(60));
  const value = n / Math.pow(60, i);
  return { value, unit: TIME_UNITS[i] };
};

// Distance formatter
export const distanceFormatter = (n) => {
  const { unit, value } = getDistanceValueAndUnit(n);
  return new Intl.NumberFormat("en", {
    notation: "compact",
    style: "unit",
    unit: `${unit}`,
    unitDisplay: "narrow",
  }).format(value);
};

// Time formatter
export const timeFormatter = (n) => {
  const { unit, value } = getTimeValueAndUnit(n);
  return new Intl.NumberFormat("en", {
    notation: "compact",
    style: "unit",
    unit: `${unit}`,
    unitDisplay: "narrow",
  }).format(value);
};
