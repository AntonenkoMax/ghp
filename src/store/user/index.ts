import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./types";

const initialState: UserState = {
  error: null,
  pending: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetUser: () => {
      return initialState;
    },
  },
  // extraReducers: {
  //
  // }
});

export const { resetUser } = userSlice.actions;

export default userSlice;
