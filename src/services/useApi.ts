import axios from "axios";
import { store } from "../stores/store";
import { useDispatch } from "react-redux";
import {
  getRefreshToken,
  getToken,
  removeToken,
  setAccessToken,
} from "../helpers/authHelpers";
import {
  clearUser,
  setIsAuthentication,
} from "../stores/reducers/user-reducers";
import { setErrors } from "../stores/reducers/app-reducers";
import { BASE_URL } from "../constants/base-urls";
import { refreshAccessToken } from "./auth/refreshToken";

export interface NetworkRequestReturnType {
  code: number;
  status: "success" | "failed" | "pending";
  data?: any;
  headers?: Record<string, string>;
}

type GetRequestType = {
  url: string;
  payload?: any | never;
  headers?: Record<string, string>;
  useBaseUrl?: boolean;
  ignoreError?: boolean;
};

type PostRequestType = {
  url: string;
  payload: any;
  headers?: Record<string, string>;
  useBaseUrl?: boolean;
  ignoreError?: boolean;
};

export interface NetworkReturnType {
  request: {
    (
      method: "GET" | "DELETE",
      props: GetRequestType
    ): Promise<NetworkRequestReturnType>;
    (
      method: "POST" | "PATCH",
      props: PostRequestType
    ): Promise<NetworkRequestReturnType>;
  };
}

const source = axios.CancelToken.source();

export const useApi = (): NetworkReturnType => {
  const dispatch = useDispatch();
  const apiClient = axios.create({
    // withCredentials: true,
  });

  let isRefreshing = false; // track refresh status
  let refreshSubscribers: any[] = []; // store failed requests that are waiting

  // add subscriber to wait for token refresh
  function addRefreshSubscriber(callback: (newToken: string) => void) {
    refreshSubscribers.push(callback);
  }

  // on 401 errors use token refresh
  apiClient.interceptors.response.use(
    (response) => {
      // handleSuccessMessage(response);
      return response; // if the response is successful,
    },
    async (error) => {
      const originalRequest = error.config;

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        // if refresh token is already being processed, queue this request
        if (isRefreshing) {
          return new Promise((resolve) => {
            addRefreshSubscriber((newToken: string) => {
              originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
              resolve(apiClient(originalRequest)); // retry the original request with the new token
            });
          });
        }

        isRefreshing = true; // flag to indicate refresh is in progress

        try {
          const refresh_token = getRefreshToken();

          if (refresh_token) {
            const newTokenObj: TUserAccessToken = await refreshAccessToken({
              refreshToken: refresh_token,
            });

            setAccessToken(newTokenObj?.authorizationToken);

            apiClient.defaults.headers.common["Authorization"] =
              "Bearer " + newTokenObj.authorizationToken;

            originalRequest.headers["Authorization"] =
              "Bearer " + newTokenObj.authorizationToken;

            return apiClient(originalRequest);
          } else {
            store.dispatch(clearUser()); // log out if refresh doesn't exist
          }
        } catch (refreshError) {
          const props = originalRequest.props;
          handleErrors(refreshError, props);
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }
      const props = originalRequest.props;
      handleErrors(error, props);
      return Promise.reject(error);
    }
  );

  const handleErrors = async (
    error: any,
    props: GetRequestType | PostRequestType
  ) => {
    if (import.meta.env.VITE_REACT_APP_NODE_ENV !== "production") {
      console.warn("[Axios Error....]", error);
    }

    const statusCode = error?.response?.status;
    let errorMessage: any = [];
    if (error.response && error.response.data) {
      const message = error.response.data.message;

      if (typeof message === "object" && message !== null) {
        errorMessage = Object.values(message).flat();
      } else if (typeof message === "string") {
        errorMessage = [message];
      } else {
        errorMessage = [error.response.data.error ?? "An Error occured!"];
      }

      if (statusCode === 401) {
        removeToken();
        dispatch(clearUser());
        dispatch(setIsAuthentication(false));
      } else {
        if (!props.ignoreError) store.dispatch(setErrors(errorMessage));
      }
    }
  };

  const request = async (
    method: "GET" | "POST" | "PATCH" | "DELETE",
    props: GetRequestType | PostRequestType
  ): Promise<NetworkRequestReturnType> => {
    const { url, payload, headers, useBaseUrl } = props;
    const baseURL = BASE_URL;
    let fullUrl = "";
    const token = getToken();

    if (!useBaseUrl) {
      fullUrl = `${baseURL}${url}`;
    } else {
      fullUrl = url;
    }

    const config = {
      method,
      url: fullUrl,
      data: payload,
      headers: {
        ...headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      cancelToken: source.token,
      props,
    };

    try {
      const response = await apiClient.request<NetworkRequestReturnType>(
        config
      );
      return {
        code: response.status,
        status: "success",
        data: response.data,
      };
    } catch (error: any) {
      // handleErrors(error, props);
      return {
        code: error.response.status,
        status: "failed",
        data: error?.response?.data?.message,
      };
    }
  };

  return {
    request,
  };
};
