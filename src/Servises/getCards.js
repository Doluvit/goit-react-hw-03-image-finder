import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

export const getCards = async (searchText, page) => {
  const options = new URLSearchParams({
    per_page: 12,
    page: page,
    key: '35750214-c04e148fdca89a66c6114339d',
    q: searchText,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return await axios.get(`${BASE_URL}?${options}`);
};
