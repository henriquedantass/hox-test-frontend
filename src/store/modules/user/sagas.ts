import { all, takeLatest, call, put } from "redux-saga/effects";
import { api } from "../../../services/api";
import { signInFailure, signInRequest, signInSuccess } from "./actions";
import { LoginAPISignIn, UserActions, UserProps } from "./types";

type CheckUserLoggin = ReturnType<typeof signInRequest>;

function* checkUserLoggin({ payload }: CheckUserLoggin) {
  const { credentials } = payload;

  try {
    const response: LoginAPISignIn = yield call(
      api.post,
      "/login",
      credentials
    );

    yield put(signInSuccess(response));
  } catch {
    yield put(signInFailure());
  }
}

export default all([takeLatest(UserActions.signInRequest, checkUserLoggin)]);
