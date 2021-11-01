import { takeLatest } from "redux-saga/effects";
import {getUser} from "./shared/reducer/user.slice";
import {handleGetUser} from "./shared/saga/handler/handlerGetUser";
import {getProject} from "../../modules/home/store/reducer/project.slice";
import {handleGetProjects} from "../../modules/home/store/saga/handler/project.handle";
import {getGateway} from "../../modules/home/store/reducer/gateway.slice";
import {handleGetGateways} from "../../modules/home/store/saga/handler/gateway.handle";
import {handleGetReport} from "../../modules/home/store/saga/handler/report.handle";
import {getReport} from "../../modules/home/store/reducer/report.slice";

export function* watcherSaga() {
  yield takeLatest(getUser.type, handleGetUser);
  yield takeLatest(getProject.type, handleGetProjects);
  yield takeLatest(getGateway.type, handleGetGateways);
  yield takeLatest(getReport.type, handleGetReport);
}
