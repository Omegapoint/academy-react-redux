import { createSlice } from "@reduxjs/toolkit";

// Initial state of the avatar
const initialState = {
  currentAvatar: null,
};

const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    updatedAvatar: (state, action) => {
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
export const selectCurrentAvatar = (state) => state.avatar.currentAvatar;

// Export reducer
export default avatarSlice.reducer;
