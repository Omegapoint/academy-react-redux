import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, getUser } from "../../api";
import { User } from "../../models/user.model";
import { RootState } from "../../store";

type UsersState = {
  status: "uninitialized" | "loading" | "success" | "failed";
  all: Array<User>;
  error: string | null;
};
const initialState = {
  users: {
    all: [],
    status: "uninitialized",
    error: null,
  },
  user: {
    selectedUser: null,
    status: "uninitialized",
    error: null,
  },
};

// We use createAsyncThunk to create an action creator that returns a function we can dispatch.
export const fetchUsers = createAsyncThunk<Array<User>>(
  "users/fetchUsers",
  async () => {
    const users: Array<User> = await getUsers();
    return users;
  }
);

export const fetchUser = createAsyncThunk("users/fetchUser", async (userId) => {
  const user = await getUser(userId);
  return user;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  // Extra reducers are used to handle actions that are dispatched outside of the slice. In our case, an asycn action that fetches api data.
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.users.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users.status = "success";
        state.users.all = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.users.status = "failed";
      })
      .addCase(fetchUser.pending, (state) => {
        state.user.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user.status = "success";
        state.user.selectedUser = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.user.status = "failed";
      });
  },
});

export const selectUsers = (state: RootState) => state.users.users;
export const selectUser = (state: RootState) => state.users.user;

export default usersSlice.reducer;
