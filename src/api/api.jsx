const API_URL = 'https://database-api.onrender.com/';

export const getTotalDatabase = () => {
  return {
    url: API_URL + 'games',
    options: {
      method: 'GET',
    },
  };
};

export const getCompanies = () => {
  return {
    url: API_URL + 'company',
    options: {
      method: 'GET',
    },
  };
};

export const getPlatforms = (id) => {
  return {
    url: API_URL + `company/${id}?_embed=platforms`,
    options: {
      method: 'GET',
    },
  };
};

export const getGreatestGamesByPlatform = (id) => {
  return {
    url: API_URL + `games?_sort=meta_score&_order=desc&platformId=${id}&_limit=3`,
    options: {
      method: 'GET',
    },
  };
};

export const getGreatestGamesByRating = () => {
  return {
    url: API_URL + `games?_sort=meta_score&order=desc&_limit=50`,
    options: {
      method: 'GET',
    },
  };
};