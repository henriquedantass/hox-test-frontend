import { LoginCredentials } from "./types";

export function signIn(credentials: LoginCredentials) {
  return {
    type: "USER_SIGN_IN",
    payload: {
      credentials,
    },
  };
}
