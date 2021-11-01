import { call, put } from "redux-saga/effects";
import {AxiosResponse} from "axios";
import {IResponse} from "../../../../../core/models/Response";
import {IReport} from "../../../models/IReport";
import {setReport} from "../../reducer/report.slice";
import {requestGetAllReports} from "../request/report.request";

export function* handleGetReport() {
    try {
        const { data }: AxiosResponse<IResponse<IReport>> = yield call(requestGetAllReports);
        yield put(setReport(data.data));
    } catch (e) {
        console.error(e);
    }
}
