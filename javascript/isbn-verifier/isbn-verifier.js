const isbnArray = (isbn) => {
  return isbn.split('-').join('').split('');
}

export const isValid = (input) => {
  // Convert ISBN to array
  let isbn = isbnArray(input);
  // Check if the length of the ISBN is 10 digits
  if (isbn.length !== 10) {
    return false;
  }
  // Check if the ISBN has a check digit and convert to number
  if (isbn[9] === 'X' || isbn[9] === 'x') {
    isbn[9] =10;
  }
  // Run formula to check if the ISBN is valid
  let sum = isbn.reduce((a, b, i) => {
    return a + b * (10 - i);
  }, 0);
  // Return true if the sum is divisible by 11, otherwise return false
  return sum % 11 === 0;
};
