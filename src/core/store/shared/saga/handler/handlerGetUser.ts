import { call, put } from "redux-saga/effects";
import { setUser } from "../../reducer/user.slice";
import { requestGetUser } from "../request/users";
import { IResponse } from "../../../../models/Response";
import { AxiosResponse } from "axios";
import { IUser } from "../../../../models/User";

export function* handleGetUser() {
  try {
    const { data }: AxiosResponse<IResponse<IUser>> = yield call(
      requestGetUser
    );
    yield put(setUser(data.data[0]));
  } catch (e) {
    console.error(e);
  }
}
