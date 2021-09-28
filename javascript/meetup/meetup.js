const SHIFT_DAYS = {
  "teenth": 0,
  "first": 0,
  "second": 7,
  "third": 14,
  "fourth": 21,
  "last": -7
}

// New date prototype for getting weekday
Date.prototype.getWeekDay = function() {
  var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekday[this.getDay()];
}

const getDate = (firstDayOfMonth, lastDayOfMonth, year, month, day, descriptor) => {
  month = (descriptor === "last") ? month : month - 1;
  for (let i=firstDayOfMonth; i<lastDayOfMonth; i++) {
    let date = new Date(year, month, i);
    if (date.getWeekDay() === day) {
      date.setDate(date.getDate() + SHIFT_DAYS[descriptor]);
    return date;  
    }
  }
}

const numberOfDaysInMonth = (year, month) => new Date(year, month+1, 0).getDate();

const getFirstDayOfMonth = (descriptor) => (descriptor === "teenth") ? 13 : 1;

const getLastDayOfMonth = (descriptor, year, month) => {
  return (descriptor === "teenth") ? 20 : numberOfDaysInMonth(year, month);
}

export const meetup = (year, month, descriptor, day) => {
  const firstDayOfMonth = getFirstDayOfMonth(descriptor);
  const lastDayOfMonth = getLastDayOfMonth(descriptor, year, month);
  return getDate(firstDayOfMonth, lastDayOfMonth, year, month, day, descriptor);
};
