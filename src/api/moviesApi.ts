import axios, {AxiosError} from 'axios';

const headers = {
  'X-RapidAPI-Key': '4ed1422592mshf311bfbfa37f247p1a656cjsn623e61c0e23c',
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
