import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: { maxResults: 50 },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const api = async (url) => {
  if (!process.env.REACT_APP_API_KEY) {
    console.error('Missing REACT_APP_API_KEY. Create a .env file with REACT_APP_API_KEY=your_rapidapi_key and restart the dev server.');
  }
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (err) {
    console.error('API request failed:', err?.response?.data || err?.message || err);
    return { items: [] };
  }
};