import { AxiosResponse } from "axios";

export enum UserActions {
  signInRequest = "SIGN_IN_REQUEST",
  signInSuccess = "SIGN_IN_SUCCESS",
  signInFailure = "SIGN_IN_FAILURE",
}

type User = {
  email: string;
  id: number;
};

export interface UserProps {
  data: User;
  isLoggedIn: boolean;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export type LoginAPISignIn = Promise<
  AxiosResponse<{
    acessToken: string;
    user: User;
  }>
>;
