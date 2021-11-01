import { call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { IResponse } from "../../../../../core/models/Response";
import { requestGetProjects } from "../request/project.request";
import { setProject } from "../../reducer/project.slice";
import { IProject } from "../../../models/IProject";

export function* handleGetProjects() {
  try {
    const { data }: AxiosResponse<IResponse<IProject>> = yield call(
      requestGetProjects
    );
    yield put(setProject(data.data));
  } catch (e) {
    console.error(e);
  }
}
