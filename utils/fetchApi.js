import axios from 'axios';

export const baseUrl = process.env.BASE_URL;

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': process.env.RAPID_API_KEY,
    },
  });
  return data;
};