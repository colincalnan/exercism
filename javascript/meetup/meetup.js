const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getMatchingDaysInMonth = (year, month, day_of_week) => {
  let date = new Date(year, month-1, 1);
  let matchingDays = [];
  while (date.getMonth() === month-1) {
    if(WEEKDAYS[date.getDay()] === day_of_week) {
      matchingDays.push(new Date(date));
    }
    date.setDate(date.getDate() + 1)
  }
  return matchingDays;
}

const filters = {
  "teenth": (list) => list.filter(date => date.getDate()>12 && date.getDate() < 20).pop(),
  "first": (list) => list[0],
  "second": (list) => list[1],
  "third": (list) => list[2],
  "fourth": (list) => list[3],
  "last": (list) => list.pop()
}

export const meetup = (year, month, descriptor, day_of_week) => {
  let matchingDaysInMonth = getMatchingDaysInMonth(year, month, day_of_week);
  return filters[descriptor](matchingDaysInMonth);
}
