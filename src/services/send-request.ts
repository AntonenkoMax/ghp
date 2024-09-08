import axios, { AxiosRequestConfig, isAxiosError, AxiosResponse } from "axios";
import { ErrorResult } from "./types";

export const sendRequest = async <Response>({
  method,
  url,
  data,
  ...config
}: {
  [p: string]: any;
}) => {
  try {
    const config: AxiosRequestConfig = {
      method: method,
      url: url,
      data: data,
    };

    const response = (await axios(config)) as AxiosResponse<Response>;

    return response.data;
  } catch (error) {
    const errorObj: ErrorResult = {
      message: "There was a problem with the request, please try again.",
      isError: true,
    };

    if (isAxiosError(error)) {
      errorObj.code = error.response?.status;
      if (error.response?.data) {
        errorObj.message = error.response.data.message;
      } else {
        errorObj.message = error.message;
      }
    }

    return errorObj;
  }
};
