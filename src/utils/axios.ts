import axios from "axios";
import { getUser, removeUser } from "src/services/token.service";
import { BASE_URL } from "../config/settings";

const client = axios.create({ baseURL: BASE_URL });

export const request = ({ ...options }) => {
  const user: any = getUser();
  client.defaults.headers.common.Authorization = `${user.token}`;

  const onSuccess = (response: any) => response;
  const onError = (error: any) => {
    removeUser();
    window.location.href = "/";
  };
  return client(options).then(onSuccess).catch(onError);
};

export const requestToken = ({ ...options }) => {
  const onSuccess = (response: any) => response;
  const onError = (error: any) => {
    removeUser();
    window.location.href = "/";
  };
  return client(options).then(onSuccess).catch(onError);
};
