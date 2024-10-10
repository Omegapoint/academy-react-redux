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
      // TODO: Task 3 - update the state
    },
    // TODO: Task 4 - add a reset action
  },
});

// Export actions
// TODO: Task 4 - Don't forget to export the reset action!
export const { updatedAvatar } = avatarSlice.actions;

// Avatar selector
export const selectCurrentAvatar = (state) => state.avatar.currentAvatar;

// Export reducer
export default avatarSlice.reducer;
