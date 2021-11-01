import { call, put } from "redux-saga/effects";
import {AxiosResponse} from "axios";
import {IResponse} from "../../../../../core/models/Response";
import {requestGetGateways} from "../request/gateway.request";
import {setGateway} from "../../reducer/gateway.slice";
import {IGateway} from "../../../models/IGateway";

export function* handleGetGateways() {
    try {
        const { data }: AxiosResponse<IResponse<IGateway>> = yield call(requestGetGateways);
        yield put(setGateway(data.data));
    } catch (e) {
        console.error(e);
    }
}
