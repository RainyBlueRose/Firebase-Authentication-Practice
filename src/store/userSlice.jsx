import { createSlice } from "@reduxjs/toolkit";
import { increment } from "firebase/firestore";

const initialState = {
  value: "สวัสดีครับ",
  user: [],
  it: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = "Login นะครับ";
      state.user = action.payload;
    },
    logout: (state) => {
      state.value = "logOut นะครับ";
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { login, logout, indrementByAmount } = userSlice.actions;
export default userSlice.reducer;
