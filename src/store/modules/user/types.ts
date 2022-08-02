import { AxiosResponse } from "axios";

export enum UserActions {
  signInRequest = "SIGN_IN_REQUEST",
  signInSuccess = "SIGN_IN_SUCCESS",
  signInFailure = "SIGN_IN_FAILURE",
  signOutRequest = "SIGN_OUT_REQUEST",
  signOutSuccess = "SIGN_OUT_SUCCESS",
}

type User = {
  email: string;
  id: number;
};

export interface UserProps {
  data?: User;
  isLoggedIn: boolean;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export type LoginAPIResponse = {
  acessToken: string;
  user: User;
};

export type LoginAPISignIn = Promise<AxiosResponse<LoginAPIResponse>>;
