import axios from 'axios';
import { globalAxios } from '../../infra/http/baseHttp';

export async function loginService(username: string, password: string): Promise<any> {
  const route = 'http://localhost:3000/login';

  try {
    const { data } = await globalAxios.post(route, {
      username: username,
      password: password
    });

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
