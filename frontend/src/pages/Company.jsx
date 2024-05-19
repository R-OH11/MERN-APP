import React from "react";
import CompanyHeader from "../features/Company/CompanyHeader";
import CompanyList from "../features/Company/CompanyList";

function Company() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 px-20">
      <CompanyHeader />
      <div className="h-[2px] w-full bg-gray-400 px-24 opacity-0.5 shadow-sm md:self-stretch" />
      <div className="my-16 w-full">
        <CompanyList />
      </div>
    </div>
  );
}

export default Company;
