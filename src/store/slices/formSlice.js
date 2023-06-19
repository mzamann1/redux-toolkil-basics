import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  cost: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
    resetCarForm(state, action) {
      return initialState;
    },
  },
});

export const { changeName, changeCost, resetCarForm } = formSlice.actions;

export const formReducer = formSlice.reducer;
