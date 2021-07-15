const getNumberOfSteps = n => {
  let count = 0;
  if (n !== 1) {
    count = 1 + getNumberOfSteps(!(n % 2) ? n / 2 : 3 * n + 1)
  }
 return count;
}

export const steps = n => {
  if (n <= 0) throw new Error('Only positive numbers are allowed');
  return getNumberOfSteps(n) 
};