import axios, {AxiosError} from 'axios';
import API_KEY from './headers';

const headers = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
};

export async function fetchPopularMovies(): Promise<Movies[] | AxiosError> {
  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    params: {
      list: 'top_boxoffice_200',
      info: 'base_info',
      limit: '50',
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

export async function testing() {
  const res = await axios.get(
    'https://moviesdatabase.p.rapidapi.com/titles/tt0499549?info:primaryVideos',
  );
  return res.data;
}

export async function fetchNext(url: string) {
  const options = {
    method: 'GET',
    url: `https://moviesdatabase.p.rapidapi.com/titles${url}`,
    params: {
      list: 'top_boxoffice_200',
      info: 'base_info',
      limit: '50',
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
