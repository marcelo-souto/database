const API_URL = 'https://database-api.onrender.com/';

export const getTotalDatabase = () => {
  return {
    url: API_URL + 'games',
    options: {
      method: 'GET',
    },
  };
};