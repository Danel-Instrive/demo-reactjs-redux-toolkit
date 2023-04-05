import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

export const themeReducer = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = themeReducer.actions;

export default themeReducer.reducer;
