import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchUsers,
  fetchUserById,
  deleteUserById,
  AddUser,
  updateUser,
} from './usersOperations';

const USER_ACTIONS = [
  fetchUserById,
  fetchUsers,
  deleteUserById,
  AddUser,
  updateUser,
];

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentUser: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(deleteUserById.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          element => element.id === action.payload
        );
        state.items.splice(index, 1);
        state.currentUser = null;
      })
      .addCase(AddUser.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          element => element.id === action.payload.id
        );
        console.log(index);
        state.items.splice(index, 1, action.payload);
        state.currentUser = action.payload;
      })
      .addMatcher(
        isAnyOf(...USER_ACTIONS.map(action => action.fulfilled)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(...USER_ACTIONS.map(action => action.pending)),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(...USER_ACTIONS.map(action => action.rejected)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const userReducer = usersSlice.reducer;
