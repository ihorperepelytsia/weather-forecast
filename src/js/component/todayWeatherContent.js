import {
  getCurrentWeekDay,
  getCurrentDateSt,
  getCurrentMonth,
  nowTime,
  getCurrentDate,
} from '../utils/parseDate';
import { refs } from './refs';

export function toDayWeatherContent(data) {
  refs.todayWeatherCity.textContent = `${data.name}, ${data.sys.country}`;
  refs.fiveDaysCity.textContent = `${data.name}, ${data.sys.country}`;
  refs.todayWeatherSky.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  refs.todayWeatherTemperatureCurrent.textContent = `${Math.round(
    data.main.temp,
  )}${String.fromCharCode('0176')}`;
  refs.todayWeatherTemperatureDayMinTemp.textContent = `${Math.round(
    data.main.temp_min,
  )}${String.fromCharCode('0176')}`;
  refs.todayWeatherTemperatureDayMaxTemp.textContent = `${Math.round(
    data.main.temp_max,
  )}${String.fromCharCode('0176')}`;
  refs.todayDateSunset.textContent = `${new Date(+data.sys.sunrise * 1000)
    .toLocaleTimeString()
    .slice(0, -3)}`;
  refs.todayDateSunrise.textContent = `${new Date(+data.sys.sunset * 1000)
    .toLocaleTimeString()
    .slice(0, -3)}`;
}

refs.todayDateCurrentDay.textContent = `${getCurrentDate()}`;
refs.todayDateCurrentDaySt.textContent = `${getCurrentDateSt()}`;
refs.todayDateCurrentWeek.textContent = `${getCurrentWeekDay().slice(0, 3)}`;
refs.todayDateCurrentMonth.textContent = `${getCurrentMonth()}`;
setInterval(() => {
  refs.todayDateCurrentTime.textContent = `${nowTime()}`;
}, 1000);
