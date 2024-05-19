import React, { useState } from "react";
import ReviewHeader from "../features/Review/ReviewHeader";
import ReviewList from "../features/Review/ReviewList";
import CompanyDescription from "../features/Review/CompanyDescription.jsx";

function Reviews() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 px-20">
      <ReviewHeader />
      <div className="h-[2px] w-full bg-gray-400 px-24 opacity-0.5 shadow-sm md:self-stretch" />
      <div className="mb-16 mt-4 w-full">
        <CompanyDescription />
        <div className="h-[1px] w-full bg-gray-400 px-24 opacity-0.5 shadow-sm md:self-stretch" />
        <ReviewList />
      </div>
    </div>
  );
}

export default Reviews;
