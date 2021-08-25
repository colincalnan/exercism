export const steps = n => {
  
  const getNumberOfSteps = number => {
    let count = 0;
    // If we have reached 1, return
    if (number === 1) { 
      return count;
    // otherwise keep going until we reach 1
    } else {
      // if n is divisble by 2 (even) then divide it by two
      if (number % 2 <= 0) { 
        number = number / 2; 
      // otherwise return 3n + 1
      } else {
        number = (3 * number) + 1;
      }
      return 1 + getNumberOfSteps(number);
    }
  }

  if (n <= 0) throw new Error('Only positive numbers are allowed');
  return getNumberOfSteps(n) 
};