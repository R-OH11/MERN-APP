import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Img } from "../../ui/Img";
import { Text } from "../../ui/Text";
import StarReview from "../../ui/starReview";
import AddReviewModal from "./AddReviewModal";
import { useCompanyDetails } from "./useReview";
import { formatCompanyFoundationDate } from "../../utils/helpers";

function CompanyDescription() {
  const { companyId } = useParams();

  const { getCompanyData, companyData } = useCompanyDetails();

  useEffect(() => {
    if (companyId) {
      getCompanyData(companyId);
    }
  }, []);

  return (
    <div className="flex w-full justify-between rounded-md rounded-bl-none rounded-br-none border bg-white-A700 p-4 pb-[40px]">
      <div className="flex justify-start gap-3">
        <Img
          src={`/uploads/${companyData?.company?.image?.split("\\")[4]}`}
          className="h-[120px] w-[120px] rounded-md"
        />
        <div className="flex flex-col items-start justify-between">
          <div className="gap-1">
            <Text size="6xl" className="!text-black-900_01">
              {companyData?.company?.companyName}
            </Text>
            <Text size="lg">{companyData?.company?.location}</Text>
          </div>
          <div className="flex items-end justify-center gap-1">
            <Text size="xl" className="!text-black-900_01">
              {companyData?.company?.reviewAverage}
            </Text>
            <StarReview companyRating={companyData?.company?.reviewAverage} />
            <Text size="xl" className="!text-black-900_01">
              {`${companyData?.totalReview} reviews`}
            </Text>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between">
        <Text size="lg">{`Founded on ${formatCompanyFoundationDate(
          companyData?.company?.foundedOn
        )}`}</Text>
        <AddReviewModal />
      </div>
    </div>
  );
}

export default CompanyDescription;
