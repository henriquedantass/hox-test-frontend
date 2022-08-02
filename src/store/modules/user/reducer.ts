import { api } from "../../../services/api";
import { Reducer } from "redux";
import { UserActions, UserProps } from "./types";

const initialState = {
  data: {},
  isLoggedIn: false,
  logginFailed: false,
} as UserProps;

const setDefaultsHeaders = (token: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const user: Reducer<UserProps> = (state = initialState, action) => {
  switch (action.type) {
    case UserActions.signInSuccess: {
      const { user, accessToken } = action.payload.response.data;

      setDefaultsHeaders(accessToken);
      window.location.href = "http://localhost:5173";

      return {
        data: user,
        isLoggedIn: true,
        logginFailed: false,
      };
    }

    case UserActions.signInFailure: {
      return {
        ...state,
        logginFailed: true,
      };
    }

    case UserActions.signOutRequest: {
      setDefaultsHeaders("");

      window.location.href = "http://localhost:5173/login";

      return {
        ...state,
        data: undefined,
        isLoggedIn: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default user;
