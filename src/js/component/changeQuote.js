import { refs } from './refs';
import quotes from '../utils/quotes';

export function changeQuote(data) {
  let idxArr = 0;
  function indexPlus() {
    idxArr += 1;
  }
  setInterval(() => {
    if (idxArr < 49) {
      indexPlus();

      if (data[idxArr].q.length < 150) {
        refs.quoteText.textContent = data[idxArr].q;
        refs.quoteOwner.textContent = data[idxArr].a;
      }
    }
    return;
  }, 5000);
}
changeQuote(quotes);
