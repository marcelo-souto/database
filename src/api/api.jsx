<<<<<<< HEAD
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

export const getGreatestGamesByRating = (query) => {

  return {
    url: API_URL + `games?_sort=${query}&_order=desc&_limit=50`,
    options: {
      method: 'GET',
    },
  };
};
=======
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

export const getGreatestGamesByRating = (query) => {

  return {
    url: API_URL + `games?_sort=${query}&_order=desc&_limit=50`,
    options: {
      method: 'GET',
    },
  };
};

export const getTotalGameCompany = () => {
  return {
    url: API_URL + `company?_embed=games`,
    options: {
      method: 'GET',
    },
  };
};

export const getGreatestGamesByCompany = (id) => {
  return {
    url: API_URL + `games?_sort=meta_score&_order=desc&_limit=10&companyId=${id}`,
    options: {
      method: 'GET',
    },
  };
};

export const getGreatestGamesByCritic = ({firstChoose, secondChoose}) =>{

  return {
    url: API_URL + `games?_sort=${firstChoose == 'Usuário'? 'user_review':'meta_score'}&_order=desc&release_year=${secondChoose}&_limit=10`,
    options: {
      method: 'GET',
    },
    
  };
}
>>>>>>> 0110a05 (pages)
