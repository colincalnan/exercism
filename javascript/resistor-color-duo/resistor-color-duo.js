export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

/**
 * Function to get the index of a color
 * @param {string} color 
 * @returns {integer} index of passed color in list of colors
 */
function getColorIndex(color) {
  return COLORS.indexOf(color);
}

/**
 * In postional numeral systems you take it's position and use that as the exponentation of 10
 * So in the case of 68 = 6 x 10^1 + 8 x 10^0 = 60 + 8 = 68!
 * @param {*} integerValues 
 * @returns 
 */
function convertToInteger(integerValues) {
  let accumulator = 0;
  integerValues.forEach((integer, index) => accumulator += integer * Math.pow(10, (integerValues.length - 1) - index));
  return accumulator;
}

/**
 * Function to decode colors to a single integer
 * @param {array} colors 
 * @returns {int} 
 */
export const decodedValue = (colors) => {
  let integerValues = [];
  colors.splice(0, 2).forEach( color => integerValues.push(getColorIndex(color)));
  return convertToInteger(integerValues);
};