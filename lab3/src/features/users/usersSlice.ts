import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../../api";
import { User } from "../../models/user.model";
import { RootState } from "../../store";

type UsersState = {
  status: "uninitialized" | "loading" | "success" | "failed";
  all: Array<User>;
  error: string | null;
};

const initialState: UsersState = {
  status: "uninitialized",
  all: [],
  error: null,
};

// We use createAsyncThunk to create an action creator that returns a function we can dispatch.
export const fetchUsers = createAsyncThunk<Array<User>>(
  "users/fetchUsers",
  async () => {
    const users: Array<User> = await getUsers();
    return users;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  // Extra reducers are used to handle actions that are dispatched outside of the slice. In our case, an asycn action that fetches api data.
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "success";
        state.all = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
