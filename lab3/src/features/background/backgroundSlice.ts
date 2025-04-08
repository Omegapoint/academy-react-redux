import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type BackgroundState = {
  bgColor: string;
};

const initialState: BackgroundState = {
  // TODO: Task 2
  bgColor: "lavender",
};

const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    updatedBackgroundColor: (state, action: PayloadAction<string>) => {
      state.bgColor = action.payload;
    },
  },
});

export const { updatedBackgroundColor } = backgroundSlice.actions;

export const selectBackgroundColor = (state: RootState) =>
  state.background.bgColor;

export default backgroundSlice.reducer;
