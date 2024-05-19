import React from "react";
import { Img } from "../../ui/Img";
import { Text } from "../../ui/Text";
import StarReview from "../../ui/starReview";
import { formatCompanyFoundationDate, formatTime } from "../../utils/helpers";

function SingleReview({ reviewData }) {
  return (
    <div className="mt-5 flex w-full items-start justify-start gap-3">
      <Img
        src="https://i.postimg.cc/9fdbrM94/profile.png"
        className="h-[45px] w-[45px] rounded-[50%]"
      />
      <div className=" flex w-full flex-col items-start justify-between gap-3">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <Text size="xl" className="!text-black-900_01">
              {reviewData.fullName}
            </Text>
            <Text size="md">{`${formatCompanyFoundationDate(
              reviewData.createdAt
            )}, ${formatTime(reviewData.createdAt)}`}</Text>
          </div>
          <StarReview companyRating={reviewData.rating} />
        </div>
        <div className="w-full break-words">
          <Text size="md" className="!text-black-900_01">
            {reviewData.description}
          </Text>
        </div>
      </div>
    </div>
  );
}

export default SingleReview;
