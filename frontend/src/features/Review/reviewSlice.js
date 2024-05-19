import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rating: 0,
  isReviewAdded: false,
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    starRating(state, action) {
      state.rating = action.payload;
    },
    isReviewAdded(state, action) {
      state.isReviewAdded = action.payload;
    },
  },
});

export const { starRating, isReviewAdded } = reviewSlice.actions;

export default reviewSlice.reducer;
