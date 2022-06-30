export const refs = {
  bodyContainer: document.querySelector('body'),

  searchForm: document.querySelector('.search'),
  searchInput: document.querySelector('.search-container-input'),
  addStarCityButton: document.querySelector('.search-container-star'),
  searchStarContainer: document.querySelector('.search-star'),
  nextBtn: document.querySelector('.nextBtn'),
  prevBtn: document.querySelector('.prevBtn'),
  btnLocation: document.querySelector('.search-container-geolocation'),

  todayDayButton: document.querySelector('.today-button__today'),
  fiveDayButton: document.querySelector('.today-button__five-day'),
  todayWeather: document.querySelector('.today-weather'),
  todayDate: document.querySelector('.today-date'),
  todayQuote: document.querySelector('.today-quote'),
  todayButtonContainer: document.querySelector('.today-button'),
  fiveDaysContainer: document.querySelector('.five-days'),
  quoteText: document.querySelector('.today-quote__text'),
  quoteOwner: document.querySelector('.today-quote__owner'),
  todayWeatherCity: document.querySelector('.today-weather__city'),
  todayWeatherSky: document.querySelector('.today-weather__sky img'),
  todayWeatherTemperatureCurrent: document.querySelector(
    '.today-weather__temperature-current',
  ),
  todayWeatherTemperatureDayMinTemp: document.querySelector(
    '.today-weather__temperature-day-min--temp',
  ),
  todayWeatherTemperatureDayMaxTemp: document.querySelector(
    '.today-weather__temperature-day-max--temp',
  ),
  todayDateCurrentDay: document.querySelector('.today-date__current-day-st'),
  todayDateCurrentDaySt: document.querySelector(
    '.today-date__current-day-span',
  ),
  todayDateCurrentWeek: document.querySelector('.today-date__current-day-week'),
  todayDateCurrentMonth: document.querySelector(
    '.today-date__current-month-now',
  ),
  todayDateCurrentTime: document.querySelector(
    '.today-date__current-month-time',
  ),
  todayDateSunset: document.querySelector('.today-date__sun-sunset span'),
  todayDateSunrise: document.querySelector('.today-date__sun-sunrise span'),

  fiveDaysWeather: document.querySelector('.five-days-weather'),
  fiveDaysCity: document.querySelector('.five-days-city'),
  prevBtnFiveDays: document.querySelector('.five-days-button__prev'),
  nextBtnFiveDays: document.querySelector('.five-days-button__next'),

  moreInfo: document.querySelector('.more-info'),

  diagram: document.querySelector('.diagram'),
  diagramButton: document.querySelector('.diagram-button'),
  diagramContainer: document.querySelector('.diagram-container'),
  diagramButtonText: document.querySelector('.diagram-button__text'),
  diagramButtonImg: document.querySelector('.diagram-button__img'),
  spinner: document.querySelector('#spinner'),
};
