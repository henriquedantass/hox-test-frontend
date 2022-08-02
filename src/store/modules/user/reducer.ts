import { useNavigate } from "react-router-dom";
import { Reducer } from "redux";
import { api } from "../../../services/api";
import { UserProps } from "./types";

const initialState = {
  data: {},
  isLoggedIn: false,
} as UserProps;

const setDefaultsHeaders = (token: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const user: Reducer<UserProps> = (state = initialState, action) => {
  switch (action.type) {
    case "USER_SIGN_IN": {
      const { credentials } = action.payload;

      api.post("/login", credentials).then((response) => {
        const { accessToken } = response.data;
        setDefaultsHeaders(accessToken);
      });

      return {
        data: {
          username: credentials.email,
        },
        isLoggedIn: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default user;
