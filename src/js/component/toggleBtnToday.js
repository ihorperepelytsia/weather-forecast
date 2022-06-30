import { refs } from './refs';
refs.todayDayButton.disabled = true;
refs.todayDayButton.style.backgroundColor = '#f7f7f7';
refs.fiveDaysContainer.hidden = true;
refs.diagram.hidden = true;

refs.todayDayButton.addEventListener('click', handleClickTodayButton);
refs.fiveDayButton.addEventListener('click', handleClickFiveDayButton);

function handleClickFiveDayButton(e) {
  refs.todayDayButton.removeAttribute('style');
  refs.todayDayButton.disabled = false;

  e.target.disabled = true;
  refs.fiveDayButton.style.backgroundColor = '#f7f7f7';

  refs.todayWeather.classList.add('opacityOn');
  refs.todayDate.classList.add('opacityOn');
  refs.todayQuote.classList.add('opacityOn');
  refs.fiveDaysContainer.classList.add('opacityOn');
  refs.diagram.classList.add('opacityOn');
  refs.todayButtonContainer.classList.add('opacityOn');
  refs.todayButtonContainer.classList.remove('opacityOff');
  setTimeout(() => {
    refs.todayWeather.hidden = true;
    refs.todayDate.hidden = true;
    refs.todayQuote.hidden = true;
    refs.fiveDaysContainer.hidden = false;
    refs.diagram.hidden = false;
  }, 500);

  setTimeout(() => {
    refs.fiveDaysContainer.classList.remove('opacityOn');
    refs.fiveDaysContainer.classList.add('opacityOff');
    refs.diagram.classList.remove('opacityOn');
    refs.diagram.classList.add('opacityOff');
    refs.todayButtonContainer.classList.remove('opacityOn');
  }, 1000);

  refs.todayButtonContainer.style.margin = '0 auto 64px';
}

function handleClickTodayButton(e) {
  refs.fiveDayButton.style.backgroundColor = '';
  refs.fiveDayButton.disabled = false;

  e.target.disabled = true;
  refs.todayDayButton.style.backgroundColor = '#f7f7f7';

  refs.fiveDaysContainer.classList.remove('opacityOff');
  refs.fiveDaysContainer.classList.add('opacityOn');
  refs.diagram.classList.remove('opacityOff');
  refs.diagram.classList.add('opacityOn');
  refs.todayButtonContainer.classList.add('opacityOn');
  refs.todayButtonContainer.classList.remove('opacityOff');
  setTimeout(() => {
    refs.todayWeather.hidden = false;
    refs.todayDate.hidden = false;
    refs.todayQuote.hidden = false;
    refs.fiveDaysContainer.hidden = true;
    refs.diagram.hidden = true;
  }, 500);

  setTimeout(() => {
    refs.todayWeather.classList.remove('opacityOn');
    refs.todayDate.classList.remove('opacityOn');
    refs.todayQuote.classList.remove('opacityOn');

    refs.todayWeather.classList.add('opacityOff');
    refs.todayDate.classList.add('opacityOff');
    refs.todayQuote.classList.add('opacityOff');

    refs.fiveDaysContainer.classList.remove('opacityOn');
    refs.fiveDaysContainer.classList.add('opacityOff');
    refs.diagram.classList.remove('opacityOn');
    refs.diagram.classList.add('opacityOff');
    refs.todayButtonContainer.classList.remove('opacityOn');
  }, 1000);

  refs.todayButtonContainer.removeAttribute('style');
}
