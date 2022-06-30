import { notice } from '@pnotify/core';
import '@pnotify/core/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { getRequestWeather } from '../service/getRequestWeather';
import { getRequest5DaysWeather } from '../service/getRequest5DaysWeather';
import createStarCity from '../../templates/createStarCity.hbs';
import { load, save } from '../utils/storage';
import {
  addScrollButton,
  deleteScrollButton,
  nextSlides,
  prevSlides,
} from './sliderForm';
import { refs } from './refs';

refs.searchForm.addEventListener('submit', searchWeatherCity);
refs.addStarCityButton.addEventListener('click', addStarCity);
refs.searchStarContainer.addEventListener('click', deleteStarCity);
refs.searchStarContainer.addEventListener('click', searchStarCity);
refs.nextBtn.addEventListener('click', nextSlides);
refs.prevBtn.addEventListener('click', prevSlides);

function searchWeatherCity(e) {
  e.preventDefault();
  const inputValue = refs.searchInput.value;
  if (inputValue.length === 0) {
    notice({
      text: 'Oh no, make a more correct request!',
    });
  }
  if (inputValue.length > 0) {
    getRequestWeather(inputValue);
    refs.moreInfo.innerHTML = '';
    refs.fiveDaysWeather.innerHTML = '';
    refs.diagramContainer.innerHTML = '';
    getRequest5DaysWeather(inputValue);
  }
}

let arrayCityStar = [];

if (load('Star city') !== undefined && load('Star city').length > 0) {
  arrayCityStar = [...load('Star city')];
  arrayCityStar.forEach(e => {
    refs.searchStarContainer.insertAdjacentHTML('beforeend', createStarCity(e));
  });
}

if (
  refs.searchStarContainer.scrollWidth > refs.searchStarContainer.offsetWidth
) {
  refs.nextBtn.classList.remove('invisible');
}

if (
  refs.searchStarContainer.scrollWidth < refs.searchStarContainer.offsetWidth
) {
  refs.nextBtn.classList.add('invisible');
  refs.prevBtn.classList.add('invisible');
}

function addStarCity() {
  const inputValue = firstLetter(refs.searchInput.value);
  const isset_element = arrayCityStar.some(item => item == inputValue);
  if (inputValue.length > 0) {
    if (!isset_element) {
      refs.searchStarContainer.insertAdjacentHTML(
        'beforeend',
        createStarCity(inputValue),
      );
      arrayCityStar.push(inputValue);
      save('Star city', arrayCityStar);
      changeColorStar();
      setTimeout(() => {
        clearColorStar();
      }, 1000);
      addScrollButton();
    } else {
      notice({
        text: 'This city has already been added',
      });
    }
  } else {
    notice({
      text: "You didn't enter anything",
    });
  }
}

function deleteStarCity(e) {
  if (e.target.nodeName === 'svg') {
    e.target.parentElement.parentElement.remove();

    arrayCityStar.forEach((res, index) => {
      if (res === e.target.parentElement.previousElementSibling.innerText) {
        arrayCityStar.splice(index, 1);
        save('Star city', arrayCityStar);
      }
    });
    deleteScrollButton();
  }
}

function firstLetter(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function searchStarCity(e) {
  if (e.target.nodeName === 'P') {
    getRequestWeather(e.target.textContent);
    refs.moreInfo.innerHTML = '';
    refs.fiveDaysWeather.innerHTML = '';
    refs.diagramContainer.innerHTML = '';
    getRequest5DaysWeather(e.target.textContent);
  }
}

function changeColorStar() {
  refs.addStarCityButton.firstElementChild.style.fill = 'gold';
  refs.addStarCityButton.firstElementChild.style.transition =
    'all 300ms linear';
}

function clearColorStar() {
  refs.addStarCityButton.firstElementChild.style.fill = 'black';
}
