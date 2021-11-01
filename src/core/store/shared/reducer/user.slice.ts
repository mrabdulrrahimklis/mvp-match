import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../models/User";

const userSlice = createSlice({
  name: "user",
  initialState: {} as IUser,
  reducers: {
    getUser() {},
    setUser(state, action) {
      const { payload: userData } = action;
      return { ...state, ...userData };
    },
  },
});

export const { getUser, setUser } = userSlice.actions;

export default userSlice.reducer;
