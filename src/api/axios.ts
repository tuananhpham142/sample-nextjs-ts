import { logout } from "@/store/auth";
import { refreshToken } from "@/store/auth/services";
import {
  clearAuthentication,
  getAccessToken,
  getRefreshToken,
  setAuthCookie,
} from "@/utils/cookies.utils";
import { getLanguageDetector } from "@/utils/localStorage.utils";
import axiosBase, { AxiosRequestConfig } from "axios";
import { cloneDeep } from "lodash";

export type AxiosRequestType = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
const axiosTimeOutErrorCode = "ECONNABORTED";

const API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_PRODUCTION_SEAGAME_API
    : process.env.NEXT_PUBLIC_DEV_SEAGAME_API;

let isRefreshing: Boolean = false;
let failedQueue: Array<any> = [];

const processQueue = (error: any, token = null) => {
  failedQueue.forEach((prom: any) =>
    error ? prom.reject(error) : prom.resolve(token)
  );
  failedQueue = [];
};

const accessControlAllowOrigin = {
  "Access-Control-Allow-Origin": "*",
};

const accessToken = () => {
  const token = getAccessToken();
  return `Bearer ${token}`;
};

export const headers = {
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  ClientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  ClientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
};

const axios = axiosBase.create({
  baseURL: API_URL,
  // withCredentials: true, // to use cookies
  // headers,
});

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const commonHeader = {
      ["Accept"]: "application/json",
      ["Authorization"]: accessToken(),
      ["Accept-Language"]: getLanguageDetector(),
      ["Access-Control-Allow-Origin"]: "*",
    };

    const configHeaders = {
      ...cloneDeep(config.headers),
      ...{ common: commonHeader },
    };

    return {
      ...config,
      headers: {
        ...configHeaders,
      },
      timeout: 30000,
      ...accessControlAllowOrigin,
    };
  },
  (error) => Promise.reject(error)
);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;

    const isTimeOut = error.code === axiosTimeOutErrorCode;
    if (isTimeOut) return Promise.resolve(error);

    const isCrossDomainError = !error.response;
    if (isCrossDomainError) return Promise.resolve(error);

    const isInternalServerError = error.response.status === 500;
    if (isInternalServerError) return Promise.resolve(error.response);

    const isBadRequest = error.response.status === 400;
    if (isBadRequest) return Promise.resolve(error.response);

    const isNotFound = error.response.status === 404;
    if (isNotFound) {
      // const { url } = originalRequest;
      return Promise.resolve(error.response);
    }

    const isTokenExpired =
      (error.response.status === 401 && !originalRequest._retry) ||
      (error.response.status === 200 && error.response.data);
    if (isTokenExpired) {
      console.log("token expired");
      if (isRefreshing) {
        return new Promise((resolve, reject) =>
          failedQueue.push({ resolve, reject })
        )
          .then((accessToken) => {
            originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
            return axios(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const _refreshToken = getRefreshToken();
      if (_refreshToken) {
        return new Promise((resolve, reject) => {
          refreshToken(_refreshToken)
            .then((response) => {
              const data = response;
              if (data) {
                setAuthCookie(data.data);
                axios.defaults.headers.common[
                  "Authorization"
                ] = `Bearer ${data.data.AccessToken}`;
                originalRequest.headers[
                  "Authorization"
                ] = `Bearer ${data.data.AccessToken}`;

                processQueue(null, data.data.AccessToken);
                resolve(axios(originalRequest));
                console.log("update token");
              } else if (data) {
                clearAuthentication();
                window.location.reload();
                // alert('có lỗi đã xảy ra!');
              } else {
                return Promise.reject(error);
              }
            })
            .catch((err) => {
              processQueue(err, null);
            })
            .finally(() => {
              isRefreshing = false;
            });
        });
      } else {
        logout();
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default axios;
