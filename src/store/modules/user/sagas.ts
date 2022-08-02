import { all, takeLatest, call, put } from "redux-saga/effects";
import { api } from "../../../services/api";
import { signInFailure, signInRequest, signInSuccess } from "./actions";
import { UserActions } from "./types";

type CheckUserLoggin = ReturnType<typeof signInRequest>;

function* checkUserLoggin({ payload }: CheckUserLoggin) {
  const { credentials } = payload;

  try {
    const response = yield call(api.post, "/login", credentials);

    yield put(signInSuccess(response.data));
  } catch {
    yield put(signInFailure());
  }
}

export default all([takeLatest(UserActions.signInRequest, checkUserLoggin)]);
