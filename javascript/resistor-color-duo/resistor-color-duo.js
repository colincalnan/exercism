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
 * Function to decode colors to a single integer
 * @param {array} colors 
 * @returns {int} 
 */
export const decodedValue = (colors) => {
  return getColorIndex(colors[0]) * 10 + getColorIndex(colors[1]);
};