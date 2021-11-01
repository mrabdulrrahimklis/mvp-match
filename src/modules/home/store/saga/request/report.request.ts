import axios from "axios";
import { REACT_APP_API_URL } from "../../../../../../config";

export interface IReportParams {
  from?: string;
  to?: string;
  projectId?: string;
  gatewayId?: string;
}

export function requestGetReports(reportParams: IReportParams) {
  return axios.post(`${REACT_APP_API_URL}/report`, reportParams);
}

export function requestGetAllReports() {
  return axios.post(`${REACT_APP_API_URL}/report`, {});
}
