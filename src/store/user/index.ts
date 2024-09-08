import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";
import { getUserData } from "./actions";

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

  extraReducers: (builder) => {
    builder
      .addCase(getUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.pending = false;
        state.error = null;
      })
      .addCase(getUserData.pending, (state) => {
        state.pending = true;
      })
      .addCase(getUserData.rejected, (state, action) => {
        if (action.payload) {
          state.user = initialState.user;
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetUser } = userSlice.actions;

export default userSlice;
