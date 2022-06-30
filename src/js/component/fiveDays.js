import createFiveDays from '../../templates/createFiveDays.hbs';
import createMoreInfo from '../../templates/createMoreInfo.hbs';
import {
  mapperMoreInfo,
  firstDay,
  secondDay,
  thirdDay,
  fourthDay,
  fifthDay,
} from '../utils/mapperFiveDays';
import { refs } from './refs';

export function createMarkupFiveDays(obj) {
  refs.fiveDaysWeather.insertAdjacentHTML('beforeend', createFiveDays(obj));
}

export function createMarkupMoreInfo(obj) {
  refs.moreInfo.insertAdjacentHTML('beforeend', createMoreInfo(obj));
}

export function moreInfo(e, data) {
  const dataSetDay = +e.target.dataset.day;
  refs.moreInfo.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 1000,
  });
  const moreInfoButtonAll = document.querySelectorAll(
    '.five-days-weather__oneday-moreInfo-button',
  );
  function deleteStyleMoreInfoButtnon() {
    moreInfoButtonAll.forEach(e => e.removeAttribute('style'));
  }

  if (dataSetDay === firstDay) {
    const moreInfoButton = document.querySelector(
      `.five-days-weather__oneday-moreInfo-button[data-day="${firstDay}"]`,
    );

    if (refs.moreInfo.children.length > 0) {
      if (+refs.moreInfo.firstChild.dataset.day === firstDay) {
        deleteStyleMoreInfoButtnon();
        setTimeout(() => {
          refs.moreInfo.innerHTML = '';
        }, 500);
      } else {
        deleteStyleMoreInfoButtnon();
        moreInfoButton.style.cssText =
          'text-decoration: underline; color: #ffffff';
        setTimeout(() => {
          refs.moreInfo.innerHTML = '';
          createMarkupMoreInfo(mapperMoreInfo(data)[0]);
        }, 500);
      }
    } else {
      deleteStyleMoreInfoButtnon();
      moreInfoButton.style.cssText =
        'text-decoration: underline; color: #ffffff';
      setTimeout(() => {
        refs.moreInfo.innerHTML = '';
        createMarkupMoreInfo(mapperMoreInfo(data)[0]);
      }, 500);
    }
  }

  if (dataSetDay === secondDay) {
    const moreInfoButton = document.querySelector(
      `.five-days-weather__oneday-moreInfo-button[data-day="${secondDay}"]`,
    );
    if (refs.moreInfo.children.length > 0) {
      if (+refs.moreInfo.firstChild.dataset.day === secondDay) {
        deleteStyleMoreInfoButtnon();
        setTimeout(() => {
          refs.moreInfo.innerHTML = '';
        }, 500);
      } else {
        deleteStyleMoreInfoButtnon();
        moreInfoButton.style.cssText =
          'text-decoration: underline; color: #ffffff';
        setTimeout(() => {
          refs.moreInfo.innerHTML = '';
          createMarkupMoreInfo(mapperMoreInfo(data)[1]);
        }, 500);
      }
    } else {
      deleteStyleMoreInfoButtnon();
      moreInfoButton.style.cssText =
        'text-decoration: underline; color: #ffffff';
      setTimeout(() => {
        refs.moreInfo.innerHTML = '';
        createMarkupMoreInfo(mapperMoreInfo(data)[1]);
      }, 500);
    }
  }
  if (dataSetDay === thirdDay) {
    const moreInfoButton = document.querySelector(
      `.five-days-weather__oneday-moreInfo-button[data-day="${thirdDay}"]`,
    );
    if (refs.moreInfo.children.length > 0) {
      if (+refs.moreInfo.firstChild.dataset.day === thirdDay) {
        deleteStyleMoreInfoButtnon();
        setTimeout(() => {
          refs.moreInfo.innerHTML = '';
        }, 500);
      } else {
        deleteStyleMoreInfoButtnon();
        moreInfoButton.style.cssText =
          'text-decoration: underline; color: #ffffff';
        setTimeout(() => {
          refs.moreInfo.innerHTML = '';
          createMarkupMoreInfo(mapperMoreInfo(data)[2]);
        }, 500);
      }
    } else {
      deleteStyleMoreInfoButtnon();
      moreInfoButton.style.cssText =
        'text-decoration: underline; color: #ffffff';
      setTimeout(() => {
        refs.moreInfo.innerHTML = '';
        createMarkupMoreInfo(mapperMoreInfo(data)[2]);
      }, 500);
    }
  }
  if (dataSetDay === fourthDay) {
    const moreInfoButton = document.querySelector(
      `.five-days-weather__oneday-moreInfo-button[data-day="${fourthDay}"]`,
    );
    if (refs.moreInfo.children.length > 0) {
      if (+refs.moreInfo.firstChild.dataset.day === fourthDay) {
        deleteStyleMoreInfoButtnon();
        setTimeout(() => {
          refs.moreInfo.innerHTML = '';
        }, 500);
      } else {
        deleteStyleMoreInfoButtnon();
        moreInfoButton.style.cssText =
          'text-decoration: underline; color: #ffffff';
        setTimeout(() => {
          refs.moreInfo.innerHTML = '';
          createMarkupMoreInfo(mapperMoreInfo(data)[3]);
        }, 500);
      }
    } else {
      deleteStyleMoreInfoButtnon();
      moreInfoButton.style.cssText =
        'text-decoration: underline; color: #ffffff';
      setTimeout(() => {
        refs.moreInfo.innerHTML = '';
        createMarkupMoreInfo(mapperMoreInfo(data)[3]);
      }, 500);
    }
  }
  if (dataSetDay === fifthDay) {
    const moreInfoButton = document.querySelector(
      `.five-days-weather__oneday-moreInfo-button[data-day="${fifthDay}"]`,
    );
    if (refs.moreInfo.children.length > 0) {
      if (+refs.moreInfo.firstChild.dataset.day === fifthDay) {
        deleteStyleMoreInfoButtnon();
        setTimeout(() => {
          refs.moreInfo.innerHTML = '';
        }, 500);
      } else {
        deleteStyleMoreInfoButtnon();
        moreInfoButton.style.cssText =
          'text-decoration: underline; color: #ffffff';
        setTimeout(() => {
          refs.moreInfo.innerHTML = '';
          createMarkupMoreInfo(mapperMoreInfo(data)[4]);
        }, 500);
      }
    } else {
      deleteStyleMoreInfoButtnon();
      moreInfoButton.style.cssText =
        'text-decoration: underline; color: #ffffff';
      setTimeout(() => {
        refs.moreInfo.innerHTML = '';
        createMarkupMoreInfo(mapperMoreInfo(data)[4]);
      }, 500);
    }
  }
}

refs.prevBtnFiveDays.addEventListener('click', () => {
  refs.fiveDaysWeather.style.scrollBehavior = 'smoth';
  refs.fiveDaysWeather.scrollLeft = refs.fiveDaysWeather.scrollLeft - 140;
});
refs.nextBtnFiveDays.addEventListener('click', () => {
  refs.fiveDaysWeather.style.scrollBehavior = 'smoth';
  refs.fiveDaysWeather.scrollLeft = refs.fiveDaysWeather.scrollLeft + 140;
});

refs.moreInfo.onmousedown = () => {
  let pageX = 0;

  document.onmousemove = e => {
    if (pageX !== 0) {
      refs.moreInfo.scrollLeft = refs.moreInfo.scrollLeft + (pageX - e.pageX);
    }
    pageX = e.pageX;
  };

  window.onmouseup = () => {
    document.onmousemove = null;
    refs.moreInfo.onmouseup = null;
  };

  refs.moreInfo.ondragstart = () => {
    return false;
  };
};
