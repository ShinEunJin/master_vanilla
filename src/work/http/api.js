import axios from "axios";
import { handleError } from "./error.js";

const baseUrl = "test";

const apiInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

const requestInterceptSuccess = (config) => {
  console.log(config);
  return config;
};

const responseInterceptFailure = (error) => handleError(error);

apiInstance.interceptors.request.use(requestInterceptSuccess, null);

apiInstance.interceptors.response.use(null, responseInterceptFailure);

const api = ({ method, url, data, headers, params }) => {
  return apiInstance({ method, url, data, headers, params });
};

export default api;
