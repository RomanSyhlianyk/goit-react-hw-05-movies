import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'ab77f0c04f8ab9ce7b6392ae1e254264';

export const getTrendingMovies = async () => {
  return axios.get('trending/movie/day', {
    params: {
      api_key: API_KEY, 
    },
  });
};

export const getMovieByName = async (query) => {
  return axios.get('search/movie', {
    params: {
      api_key: API_KEY,
      query,
      
    },
  });
};

export const getMovieById = (id) => {
  return axios.get(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
}

export const getCast = id => {
  return axios.get(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const getReviews = id => {
  return axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
};