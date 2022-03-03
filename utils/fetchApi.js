import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '0e021b9f04msh6bb87ad79e3dd5cp105330jsnad699f1b1a6a',
    },
  });
  return data;
};
