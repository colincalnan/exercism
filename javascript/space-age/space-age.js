// Learned the Unary plus operator from @slaymance, thank you!!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus

const EARTH_YEAR_IN_SECONDS = 31557600
const ORBITAL_YEARS = new Map([
  ['mercury', 0.2408467],
  ['venus', 0.61519726],
  ['earth', 1],
  ['mars', 1.8808158],
  ['jupiter', 11.862615],
  ['saturn', 29.447498],
  ['uranus', 84.016846],
  ['neptune', 164.79132]
])

export const age = (planet, seconds) => +(seconds/(ORBITAL_YEARS.get(planet) * EARTH_YEAR_IN_SECONDS)).toFixed(2);