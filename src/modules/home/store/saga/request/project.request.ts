import axios from "axios";
import {REACT_APP_API_URL} from "../../../../../../config";

export function requestGetProjects() {
    return axios.request({
        method: "get",
        url: `${REACT_APP_API_URL}/projects`,
    });
}
