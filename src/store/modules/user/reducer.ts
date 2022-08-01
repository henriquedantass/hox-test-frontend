import { Reducer } from "redux";
import { UserProps } from "./types";

const initialState = {
  data: {},
  isLoggedIn: false,
} as UserProps;

const user: Reducer<UserProps> = (state = initialState, action) => {
  switch (action.type) {
    case "USER_SIGN_IN": {
      const { credentials } = action.payload;

      return {
        data: {
          username: credentials.username,
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
