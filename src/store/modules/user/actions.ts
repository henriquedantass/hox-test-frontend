import { LoginAPISignIn, LoginCredentials, UserActions } from "./types";

export function signInRequest(credentials: LoginCredentials) {
  return {
    type: UserActions.signInRequest,
    payload: {
      credentials,
    },
  };
}

export function signInSuccess(response: LoginAPISignIn) {
  return {
    type: UserActions.signInSuccess,
    payload: {
      response,
    },
  };
}
export function signInFailure() {
  return {
    type: UserActions.signInFailure,
    payload: {},
  };
}
