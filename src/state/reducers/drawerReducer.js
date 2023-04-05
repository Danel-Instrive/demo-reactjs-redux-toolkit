import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: true,
};

export const drawerReducer = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    setOpen: (state) => {
      state.open = !state.open;
    },
  },
});

export const { setOpen } = drawerReducer.actions;

export default drawerReducer.reducer;
