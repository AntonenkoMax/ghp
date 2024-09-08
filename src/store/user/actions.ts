import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../../services/send-request";
import { isErrorResult } from "../../utils/helpers/is-error-result";
import { ErrorResult } from "../../services/types";
import { UserIdPayload, UserResponse } from "./types";

export const getUserData = createAsyncThunk<
  UserResponse,
  UserIdPayload,
  { rejectValue: ErrorResult }
>("users/fetchByIdStatus", async (userName, { rejectWithValue }) => {
  const result = await sendRequest<UserResponse>({
    method: "GET",
    url: `${process.env.REACT_APP_API_URL}/users/${userName}`,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});
