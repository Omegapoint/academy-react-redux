import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // TODO: Task 2
  bgColor: "gold",
};

const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    updatedBackgroundColor(state, action) {
      state.bgColor = action.payload;
    },
  },
});

export const { updatedBackgroundColor } = backgroundSlice.actions;

export const selectBackgroundColor = (state) => state.background.bgColor;

export default backgroundSlice.reducer;
