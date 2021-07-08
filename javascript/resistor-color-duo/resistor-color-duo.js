
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
 * Function to decode colors to a single integer
 * @param {array} colors 
 * @returns {int} 
 */
export const decodedValue = (colors) => { 
  return parseInt(colors
    .slice(0,2)
    .filter(color => COLORS.indexOf(color) != -1)
    .map(color => COLORS.indexOf(color))
    .join('')
  );
};