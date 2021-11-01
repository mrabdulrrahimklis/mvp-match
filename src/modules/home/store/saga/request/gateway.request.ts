import axios from "axios";
import {REACT_APP_API_URL} from "../../../../../../config";

export function requestGetGateways() {
  return axios.request({
    method: "get",
    url: `${REACT_APP_API_URL}/gateways`,
  });
}
