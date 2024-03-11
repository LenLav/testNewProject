import axios from "axios";
import qs from "qs";

export const instanceName = axios.create({
  baseURL: "host",
  paramsSerializer,
});

instanceName.interceptors.request.use(requestHandler);
instanceName.interceptors.response.use(responseHandler, errorHandler);


function paramsSerializer(params: any) {
  return qs.stringify(params, { arrayFormat: "repeat" });
}

function requestHandler(request: any) {
  return request;
}

function responseHandler(response: any) {
  // success notify
  return response;
}

function errorHandler(error: any) {
  // error notify
  return error
}

