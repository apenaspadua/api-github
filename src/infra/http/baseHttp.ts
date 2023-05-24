import axios from 'axios';

const environment = 'https://api.github.com';

export const globalAxios = axios.create({
  baseURL: environment,
});