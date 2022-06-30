export const today = new Date();
export const firstDay = today.getDate();
export const secondDay = new Date(
  today.getTime() + 24 * 60 * 60 * 1000,
).getDate();
export const thirdDay = new Date(
  today.getTime() + 24 * 60 * 60 * 1000 * 2,
).getDate();
export const fourthDay = new Date(
  today.getTime() + 24 * 60 * 60 * 1000 * 3,
).getDate();
export const fifthDay = new Date(
  today.getTime() + 24 * 60 * 60 * 1000 * 4,
).getDate();

export function mapperFiveDays(data) {
  const dates = data.list.map(e => ({
    day: getCurrentWeekDay(+e.dt * 1000 - +data.city.timezone * 1000),
    month: getCurrentMonth(+e.dt * 1000 - +data.city.timezone * 1000),
    date: new Date(+e.dt * 1000 - +data.city.timezone * 1000).getDate(),
    dt: e.dt,
    timeDt: new Date(+e.dt * 1000 - +data.city.timezone * 1000)
      .toLocaleTimeString()
      .slice(0, -3),
    icon: e.weather[0].icon,
    pressure: e.main.pressure,
    humidity: e.main.humidity,
    speed: e.wind.speed,
    temp: Math.floor(e.main.temp),
    temp_min: e.main.temp_min,
    temp_max: e.main.temp_max,
  }));

  const day1 = dates.filter(e => {
    if (e.date === firstDay) {
      return e;
    }
  });
  const day2 = dates.filter(e => {
    if (e.date === secondDay) {
      return e;
    }
  });
  const day3 = dates.filter(e => {
    if (e.date === thirdDay) {
      return e;
    }
  });
  const day4 = dates.filter(e => {
    if (e.date === fourthDay) {
      return e;
    }
  });
  const day5 = dates.filter(e => {
    if (e.date === fifthDay) {
      return e;
    }
  });
  day1[0].temp_min = minDayTemp(day1);
  day2[0].temp_min = minDayTemp(day2);
  day3[0].temp_min = minDayTemp(day3);
  day4[0].temp_min = minDayTemp(day4);
  day5[0].temp_min = minDayTemp(day5);
  day1[0].temp_max = maxDayTemp(day1);
  day2[0].temp_max = maxDayTemp(day2);
  day3[0].temp_max = maxDayTemp(day3);
  day4[0].temp_max = maxDayTemp(day4);
  day5[0].temp_max = maxDayTemp(day5);

  const resultObj = [day1[0], day2[0], day3[0], day4[0], day5[0]];

  return resultObj;
}
export function minDayTemp(day) {
  return Math.floor(
    day.reduce((min, temp) => {
      return temp.temp_min < min ? temp.temp_min : min;
    }, day[0].temp_min),
  );
}

export function maxDayTemp(day) {
  return Math.floor(
    day.reduce((max, temp) => {
      return temp.temp_max > max ? temp.temp_max : max;
    }, day[0].temp_max),
  );
}

function getCurrentWeekDay(date) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dates = new Date(date);

  return days[dates.getDay()];
}
function getCurrentMonth(date) {
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
  const dates = new Date(date);

  return month[dates.getMonth()];
}

export function mapperMoreInfo(data) {
  const dates = data.list.map(e => ({
    day: getCurrentWeekDay(+e.dt * 1000 - +data.city.timezone * 1000),
    month: getCurrentMonth(+e.dt * 1000 - +data.city.timezone * 1000),
    date: new Date(+e.dt * 1000 - +data.city.timezone * 1000).getDate(),
    dt: e.dt,
    timeDt: new Date(+e.dt * 1000 - +data.city.timezone * 1000)
      .toLocaleTimeString()
      .slice(0, -3),
    icon: e.weather[0].icon,
    pressure: e.main.pressure,
    humidity: e.main.humidity,
    speed: e.wind.speed,
    temp: Math.floor(e.main.temp),
    temp_min: e.main.temp_min,
    temp_max: e.main.temp_max,
  }));

  const day1 = dates.filter(e => {
    if (e.date === firstDay) {
      return e;
    }
  });
  const day2 = dates.filter(e => {
    if (e.date === secondDay) {
      return e;
    }
  });
  const day3 = dates.filter(e => {
    if (e.date === thirdDay) {
      return e;
    }
  });
  const day4 = dates.filter(e => {
    if (e.date === fourthDay) {
      return e;
    }
  });
  const day5 = dates.filter(e => {
    if (e.date === fifthDay) {
      return e;
    }
  });
  day1[0].temp_min = minDayTemp(day1);
  day2[0].temp_min = minDayTemp(day2);
  day3[0].temp_min = minDayTemp(day3);
  day4[0].temp_min = minDayTemp(day4);
  day5[0].temp_min = minDayTemp(day5);
  day1[0].temp_max = maxDayTemp(day1);
  day2[0].temp_max = maxDayTemp(day2);
  day3[0].temp_max = maxDayTemp(day3);
  day4[0].temp_max = maxDayTemp(day4);
  day5[0].temp_max = maxDayTemp(day5);

  const resultObj = [day1, day2, day3, day4, day5];

  return resultObj;
}
