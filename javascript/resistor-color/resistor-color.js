//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color = 'all') => {
  const colors = [
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
  ]

  return (color == "all") ? colors : colors.indexOf(color)
};

export const COLORS = colorCode();
