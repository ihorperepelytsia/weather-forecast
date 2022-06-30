import { BASE_URL, API_KEY } from './getRequestWeather';
import axios from 'axios';
import { mapperFiveDays } from '../utils/mapperFiveDays';
import { createMarkupFiveDays, moreInfo } from '../component/fiveDays';
import { refs } from '../component/refs';
import { error } from '@pnotify/core';
import { getChart } from '../component/diagram';
export async function getRequest5DaysWeather(city = 'lviv') {
  try {
    const searchCityWeather = await axios.get(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`,
    );
    const myData = searchCityWeather.data;

    createMarkupFiveDays(mapperFiveDays(myData));
    getChart(mapperFiveDays(myData));
  } catch (err) {
    error({
      text: `Ooops! ${err.message}`,
    });
  }
}

refs.fiveDaysWeather.addEventListener('click', async e => {
  try {
    const city = refs.fiveDaysCity.textContent.split(',')[0];

    const searchCityWeather = await axios.get(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`,
    );
    setTimeout(() => {
      refs.moreInfo.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1000,
      });
    }, 500);

    moreInfo(e, searchCityWeather.data);
  } catch (err) {
    error({
      text: `Ooops! ${err.message}`,
    });
  }
});
