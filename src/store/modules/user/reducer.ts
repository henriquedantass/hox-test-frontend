import { api } from "../../../services/api";
import { Reducer } from "redux";
import { UserActions, UserProps } from "./types";

const initialState = {
  data: {},
  isLoggedIn: false,
} as UserProps;

const setDefaultsHeaders = (token: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const user: Reducer<UserProps> = (state = initialState, action) => {
  switch (action.type) {
    case UserActions.signInSuccess: {
      const { user, accessToken } = action.payload.response;

      setDefaultsHeaders(accessToken);

      return {
        data: user,
        isLoggedIn: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default user;
