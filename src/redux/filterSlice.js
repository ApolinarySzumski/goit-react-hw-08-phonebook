import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  filter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    filter: {
      reducer(state, action) {},
      prepare(name, number) {},
    },
  },
});

export const { filter } = filterSlice.actions;
export const contactsReducer = filterSlice.reducer;
