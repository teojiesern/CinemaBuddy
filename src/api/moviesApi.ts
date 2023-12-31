import axios, {AxiosError} from 'axios';
import API_KEY from './headers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const headers = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
};

export async function fetchTopBoxOfficeMoviesApi(
  pageNum = 1,
): Promise<ApiResponse[] | AxiosError> {
  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    params: {
      list: 'top_boxoffice_200',
      limit: '9',
      sort: 'pos.incr',
      info: 'base_info',
      page: pageNum.toString(),
    },
    headers,
  };

  try {
    const response = await axios.request(options);
    const data = response.data;
    return data;
  } catch (error) {
    return error as AxiosError;
  }
}

export async function fetchTopBoxOfficeLastWeekMoviesApi(
  pageNum = 1,
): Promise<ApiResponse[] | AxiosError> {
  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    params: {
      list: 'top_boxoffice_last_weekend_10',
      sort: 'pos.incr',
      info: 'base_info',
      page: pageNum.toString(),
    },
    headers,
  };

  try {
    const response = await axios.request(options);
    const data = response.data;
    return data;
  } catch (error) {
    return error as AxiosError;
  }
}

export async function fetchMostPopMoviesApi(
  pageNum = 1,
): Promise<ApiResponse[] | AxiosError> {
  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    params: {
      list: 'most_pop_movies',
      sort: 'pos.incr',
      limit: '9',
      info: 'base_info',
      page: pageNum.toString(),
    },
    headers,
  };

  try {
    const response = await axios.request(options);
    const data = response.data;
    return data;
  } catch (error) {
    return error as AxiosError;
  }
}

export async function fetchMostPopSeriesApi(
  pageNum = 1,
): Promise<ApiResponse[] | AxiosError> {
  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    params: {
      list: 'most_pop_series',
      sort: 'pos.incr',
      limit: '9',
      info: 'base_info',
      page: pageNum.toString(),
    },
    headers,
  };

  try {
    const response = await axios.request(options);
    const data = response.data;
    return data;
  } catch (error) {
    return error as AxiosError;
  }
}

export async function fetchTopRatedMoviesApi(
  pageNum = 1,
): Promise<ApiResponse[] | AxiosError> {
  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    params: {
      list: 'top_rated_250',
      sort: 'pos.incr',
      limit: '9',
      info: 'base_info',
      page: pageNum.toString(),
    },
    headers,
  };

  try {
    const response = await axios.request(options);
    const data = response.data;
    return data;
  } catch (error) {
    return error as AxiosError;
  }
}

export async function setMovieToAsyncStorage(movie: Movies[]) {
  await AsyncStorage.setItem('savedMovies', JSON.stringify(movie));
}

export async function getMoviesFromAsyncStorage() {
  const savedMovies = await AsyncStorage.getItem('savedMovies');
  if (!savedMovies) return [];
  return JSON.parse(savedMovies);
}
