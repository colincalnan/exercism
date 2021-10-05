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

const nthLookup = (descriptor, list) => {
  switch(descriptor) {
    case "first":
      return list[0];
 
    case "second": 
      return list[1];

    case "third": 
      return list[2];
    
    case "fourth": 
      return list[3];
  }
}

const filterDatesByDescriptor = (descriptor, list) => {
  switch(descriptor) {
    case "teenth":
      return list.filter(date => date.getDate()>12 && date.getDate() < 20).pop();
    
    case "last":
      return list.pop();
 
    default:
      return nthLookup(descriptor, list);
  }
}

export const meetup = (year, month, descriptor, day_of_week) => {
  let matchingDaysInMonth = getMatchingDaysInMonth(year, month, day_of_week);
  return filterDatesByDescriptor(descriptor, matchingDaysInMonth);
}
