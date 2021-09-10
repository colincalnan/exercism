const SHIFT_DAYS = {
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

const daysInMonth = (year, month) => new Date(year, month+1, 0).getDate();

export const meetup = (year, month, descriptor, day) => {
  const first_day_of_month = (descriptor == "teenth") ? 13 : 1;
  const last_day_of_month = (descriptor == "teenth") ? 20 : daysInMonth(year, month);
  
  // If we're looking for the last day in the month, need to push the month on so we can go back 7 days
  month = (descriptor == "last") ? month : month - 1;
  
  for (let i=first_day_of_month; i<last_day_of_month; i++) {
    let date = new Date(year, month, i);
    if (date.getWeekDay() == day) {
      if (descriptor != 'teenth') {
        // second monday, third monday, fourth monday are 1, 2, 3 weeks or 7, 14, 21 days from first monday 
        date.setDate(date.getDate() + SHIFT_DAYS[descriptor]);
      }
    return date;  
    }
  }
};
