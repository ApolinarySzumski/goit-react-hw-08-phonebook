import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  searchBy: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setSearchBy(state, action) {
      state.searchBy = action.payload;
    },
  },
});

export const { setSearchBy } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
