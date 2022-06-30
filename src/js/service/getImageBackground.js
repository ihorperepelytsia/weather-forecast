import axios from 'axios';
import { error } from '@pnotify/core';
import { refs } from '../component/refs';

const apiKey = '15725312-965e6abfe89225a1afd144b44';
const BASE_URL = 'https://pixabay.com/api/';

export const getImageBackground = async (searchValue = 'londond', page = 1) => {
  try {
    const searchImage = await axios.get(
      `${BASE_URL}?q=${searchValue}&page=${page}&per_page=12&key=${apiKey}`,
    );

    if (searchImage.data.hits.length > 0) {
      refs.bodyContainer.style.backgroundImage = `linear-gradient(to top, rgba(0, 0, 0, 0.45) 100%, rgba(0, 0, 0, 0.05) 0%), url(${searchImage.data.hits[0].largeImageURL})`;
    }
  } catch (err) {
    error({
      text: `Ooops! ${err.message}`,
    });
  }
};
