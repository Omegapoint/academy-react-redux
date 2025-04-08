import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type AvatarState = {
  currentAvatar: string | null;
};

// Initial state of the avatar
const initialState: AvatarState = {
  currentAvatar: null,
};

const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    updatedAvatar: (state, action: PayloadAction<string>) => {
      state.currentAvatar = action.payload;
    },
    resetAvatar: (state, action) => {
      state.currentAvatar = null;
    },
  },
});

// Export actions
export const { updatedAvatar, resetAvatar } = avatarSlice.actions;

// Avatar selector
export const selectCurrentAvatar = (state: RootState) =>
  state.avatar.currentAvatar;

// Export reducer
export default avatarSlice.reducer;
