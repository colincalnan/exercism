const EARTH_YEAR_IN_SECONDS = 31557600
const ORBITAL_YEARS = {
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'earth': 1,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132
}

const round = (string, precision = 2) => Number(string.toFixed(precision));

export const age = (planet, seconds) => {
  const planet_orbit_in_earth_seconds = ORBITAL_YEARS[planet] * EARTH_YEAR_IN_SECONDS;
  const seconds_in_earth_years = seconds/planet_orbit_in_earth_seconds;
  return round(seconds_in_earth_years);
}
