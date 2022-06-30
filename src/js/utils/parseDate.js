export function getCurrentWeekDay() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dates = new Date();

  return days[dates.getDay()];
}
export function getCurrentMonth() {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dates = new Date();

  return month[dates.getMonth()];
}

export function getCurrentDateSt() {
  const numO = [
    'st',
    'nd',
    'rd',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'st',
    'nd',
    'rd',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'st',
  ];
  const dates = new Date();

  return numO[dates.getDate() - 1];
}

export function getCurrentDate() {
  const dates = new Date();
  return dates.getDate();
}
export function nowTime() {
  const time = new Date().toLocaleTimeString();
  return time;
}
