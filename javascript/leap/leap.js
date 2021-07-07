/**
 * Tests whether the passed year is a leap year in the Gregorian calendar
 * @param {number} year The year to test
 * @returns {boolean} Whether the year passed is a leap year 
*/
export const isLeap = (year) => {
  if (year % 4 == 0) {
    if (year % 100 != 0) {
      return true;
    } else if (year % 400 != 0) {
      return false;
    }
    return true;
  }
  return false;
};
 // Much more elegant solution from slaymance. https://exercism.io/tracks/javascript/exercises/leap/solutions/651935003b404e7e8b8ac71ed5b5f049#solution-comment-174989
//  export const isLeap = year => !(year % 100) ? !(year % 400) : !(year % 4);