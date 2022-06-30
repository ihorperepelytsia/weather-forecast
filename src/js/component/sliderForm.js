import { refs } from './refs';

refs.searchStarContainer.onmousedown = () => {
  let pageX = 0;

  document.onmousemove = e => {
    if (pageX !== 0) {
      refs.searchStarContainer.scrollLeft =
        refs.searchStarContainer.scrollLeft + (pageX - e.pageX);
    }
    pageX = e.pageX;
    if (refs.searchStarContainer.scrollLeft > 0) {
      refs.prevBtn.classList.remove('invisible');
    }
    if (refs.searchStarContainer.scrollLeft === 0) {
      refs.prevBtn.classList.add('invisible');
    }
  };

  window.onmouseup = () => {
    document.onmousemove = null;
    refs.searchStarContainer.onmouseup = null;
  };

  refs.searchStarContainer.ondragstart = () => {
    return false;
  };
};

export function deleteScrollButton() {
  if (
    refs.searchStarContainer.scrollWidth <= refs.searchStarContainer.offsetWidth
  ) {
    if (document.querySelector('.nextBtn') !== null) {
      refs.nextBtn.classList.add('invisible');
      refs.prevBtn.classList.add('invisible');
    }
  }
}
export function addScrollButton() {
  if (
    refs.searchStarContainer.scrollWidth > refs.searchStarContainer.offsetWidth
  ) {
    refs.nextBtn.classList.remove('invisible');
  }
}

export function nextSlides(e) {
  e.preventDefault();
  refs.searchStarContainer.style.scrollBehavior = 'smoth';
  refs.searchStarContainer.scrollLeft =
    refs.searchStarContainer.scrollLeft + 80;

  const offsetWidthAbout1 =
    refs.searchStarContainer.scrollWidth -
      Math.round(refs.searchStarContainer.scrollLeft) -
      1 ===
    refs.searchStarContainer.offsetWidth;
  const offsetWidthAbout2 =
    refs.searchStarContainer.scrollWidth -
      Math.round(refs.searchStarContainer.scrollLeft) -
      2 ===
    refs.searchStarContainer.offsetWidth;
  const offsetWidthAbout3 =
    refs.searchStarContainer.scrollWidth -
      Math.round(refs.searchStarContainer.scrollLeft) ===
    refs.searchStarContainer.offsetWidth;
  const offsetWidthAbout4 =
    refs.searchStarContainer.scrollWidth -
      Math.round(refs.searchStarContainer.scrollLeft) +
      1 ===
    refs.searchStarContainer.offsetWidth;

  if (
    offsetWidthAbout1 ||
    offsetWidthAbout2 ||
    offsetWidthAbout3 ||
    offsetWidthAbout4
  ) {
    refs.nextBtn.classList.add('invisible');
  }
  if (refs.searchStarContainer.scrollLeft > 0) {
    refs.prevBtn.classList.remove('invisible');
  }
}
export function prevSlides(e) {
  e.preventDefault();
  refs.searchStarContainer.style.scrollBehavior = 'smoth';
  refs.searchStarContainer.scrollLeft =
    refs.searchStarContainer.scrollLeft - 80;

  if (refs.searchStarContainer.scrollLeft === 0) {
    refs.prevBtn.classList.add('invisible');
  }
  if (refs.searchStarContainer.scrollLeft > 0) {
    refs.nextBtn.classList.remove('invisible');
  }
}
