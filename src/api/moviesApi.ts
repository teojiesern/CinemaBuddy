import axios, {AxiosError} from 'axios';
import API_KEY from './headers';

const headers = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
};

export async function fetchTopBoxOfficeMovies(
  pageNum = 1,
): Promise<ApiResponse[] | AxiosError> {
  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    params: {
      list: 'top_boxoffice_200',
      limit: '9',
      sort: 'pos.incr',
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

export async function fetchTopBoxOfficeLastWeekMovies(pageNum = 1) {
  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    params: {
      list: 'top_boxoffice_last_weekend_10',
      sort: 'pos.incr',
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
