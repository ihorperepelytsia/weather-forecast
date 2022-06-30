import { refs } from '../component/refs';

export function show() {
  refs.spinner.classList.remove('is-hidden');
}

export function hide() {
  refs.spinner.classList.add('is-hidden');
}
