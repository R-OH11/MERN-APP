import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useCompanyReview } from "./useReview";
import SingleReview from "./SingleReview";

function ReviewList() {
  const { companyId } = useParams();
  const { getReviewsData, reviewsData } = useCompanyReview();
  const isAdded = useSelector((state) => state.review.isReviewAdded);

  useEffect(() => {
    if (companyId) {
      getReviewsData(companyId);
    }
  }, [companyId, isAdded]);
  return (
    <div className="flex w-full flex-col justify-between rounded-md rounded-tl-none rounded-tr-none border bg-white-A700 p-4">
      {reviewsData?.length > 0 ? (
        reviewsData?.map((review, index) => (
          <SingleReview reviewData={review} key={review?._id} />
        ))
      ) : (
        <div className="flex w-full items-center justify-center rounded-md border bg-white-A700 p-4 !text-[24px] shadow-sm">
          No Reviews found
        </div>
      )}
    </div>
  );
}

export default ReviewList;
