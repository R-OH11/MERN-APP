import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Img } from "./Img";
import { Text } from "./Text";
import { Button } from "./Button";
import StarReview from "./starReview";
import { formatCompanyFoundationDate } from "../utils/helpers";

function CompanyCard({ data }) {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-between rounded-md border bg-white-A700 p-4 shadow-sm">
      <div className="flex justify-start gap-3">
        <Img
          src={
            data?.image
              ? `uploads/${data?.image?.split("uploads")[1]}`
              : "images/company-logo.jpg"
          }
          className="h-[120px] w-[120px] rounded-md"
        />
        <div className="flex flex-col items-start justify-between">
          <div className="gap-1">
            <Text size="6xl" className="!text-black-900_01">
              {data.companyName}
            </Text>
            <Text size="lg">{`${data.location}`}</Text>
          </div>
          <div className="flex items-end justify-center gap-1">
            <Text size="xl" className="!text-black-900_01">
              {data.reviewAverage}
            </Text>
            <StarReview companyRating={data?.reviewAverage} />
            <Text size="xl" className="!text-black-900_01">
              {`${data.totalNumberReviews} reviews`}
            </Text>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between">
        <Text size="lg">{`Founded on ${formatCompanyFoundationDate(
          data?.foundedOn
        )}`}</Text>
        <Button
          variant="fill"
          shape="round"
          color="black_900_30"
          onClick={() => navigate(`/review/${data?._id}`)}
        >
          Detail Review
        </Button>
      </div>
    </div>
  );
}

export default CompanyCard;
