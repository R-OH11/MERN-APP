import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "./features/Company/companySlice";
import reviewReducer from "./features/Review/reviewSlice";

const store = configureStore({
  reducer: {
    company: companyReducer,
    review: reviewReducer,
  },
});

export default store;
