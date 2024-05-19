import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  cityName: "",
  sortBy: null,
  isCompanyAdded: false,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    globalSearch(state, action) {
      state.search = action.payload;
    },
    cityFilter(state, action) {
      state.cityName = action.payload;
    },
    sort(state, action) {
      state.sortBy = action.payload;
    },
    isCompanyAdded(state, action) {
      state.isCompanyAdded = action.payload;
    },
  },
});

export const { globalSearch, cityFilter, sort, isCompanyAdded } =
  companySlice.actions;

export default companySlice.reducer;
