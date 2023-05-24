import { globalAxios } from "../../infra/http/baseHttp";

export default class UsersService {
  static async getUsers() {
    const route = '/users';
  
    const { data } = await globalAxios.get(route);
    return data;
  }

  static async getDetailsUsers(login: string) {
    const route = `/users/${login}`;

    const { data } = await globalAxios.get(route);
    return data;
  }
}