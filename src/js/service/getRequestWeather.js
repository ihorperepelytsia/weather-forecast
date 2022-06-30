import axios from 'axios';
import { toDayWeatherContent } from '../component/todayWeatherContent';
import { show, hide } from '../utils/spinner';
import { load } from '../utils/storage';
import { error } from '@pnotify/core';
import { getImageBackground } from './getImageBackground';
import { getRequest5DaysWeather } from './getRequest5DaysWeather';

export const BASE_URL = 'https://api.openweathermap.org/data/2.5';
export const API_KEY = '3011adb88aa27a1ff044f2f136f6121c';

if (load('locationCity') !== undefined) {
  getRequestWeather(load('locationCity'));
  getImageBackground(load('locationCity'));
  getRequest5DaysWeather(load('locationCity'));
} else {
  getRequestWeather('london');
  getImageBackground('london');
  getRequest5DaysWeather('london');
}

export async function getRequestWeather(city = 'krakow') {
  try {
    show();
    const currentWeatherCity = await axios.get(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );
    toDayWeatherContent(currentWeatherCity.data);
    if (currentWeatherCity.statusText === 'OK') {
      getImageBackground(city);
    }
    hide();
  } catch (err) {
    error({
      text: `No city found with this name`,
    });
    hide();
  }
}
