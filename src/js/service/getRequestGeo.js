import { show, hide } from '../utils/spinner';
import axios from 'axios';
import { BASE_URL, API_KEY } from './getRequestWeather';
import { toDayWeatherContent } from '../component/todayWeatherContent';
import { save } from '../utils/storage';
import { getImageBackground } from './getImageBackground';
import { refs } from '../component/refs';
import { getRequest5DaysWeather } from './getRequest5DaysWeather';
import { error } from '@pnotify/core';

refs.btnLocation.addEventListener('click', getCoords);

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  const lat = crd.latitude.toFixed(4);
  const lon = crd.longitude.toFixed(4);
  try {
    show();
    axios
      .get(
        `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
      )
      .then(res => {
        hide();
        toDayWeatherContent(res.data);
        save('locationCity', res.data.name);
        refs.moreInfo.innerHTML = '';
        refs.fiveDaysWeather.innerHTML = '';
        refs.diagramContainer.innerHTML = '';
        getImageBackground(res.data.name);
        getRequest5DaysWeather(res.data.name);
      });
  } catch (err) {
    hide();
    error({
      text: `Ooops! ${err.message}`,
    });
  }
}

function errorr(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function getCoords() {
  navigator.geolocation.getCurrentPosition(success, errorr, options);
}
document.addEventListener('DOMContentLoaded', getCoords);
