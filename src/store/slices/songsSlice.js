import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },

  //handle other actions that doesn't belongs to this slice
  extraReducers: (builder) => {
    //upon getting reset action, I'm resetting the slice's state
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
