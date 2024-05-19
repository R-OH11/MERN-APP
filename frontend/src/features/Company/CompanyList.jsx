import React, { useEffect } from "react";
import CompanyCard from "../../ui/CompanyCard";
import { useCompaniesData } from "./useCompany";

function CompanyList() {
  const { companiesData } = useCompaniesData();

  return (
    <div className="flex w-full flex-col gap-5">
      {companiesData?.length > 0 ? (
        companiesData?.map((company, index) => (
          <CompanyCard data={company} key={company?._id} />
        ))
      ) : (
        <div className="flex w-full items-center justify-center rounded-md border bg-white-A700 p-4 !text-[24px] shadow-sm">
          No Company found
        </div>
      )}
    </div>
  );
}

export default CompanyList;
