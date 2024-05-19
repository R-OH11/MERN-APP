import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../../ui/Text";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "../../ui/Button";
import Dropdown from "../../ui/Dropdown";
import AddCompanyModal from "./AddCompanyModal";
import { Input } from "../../ui/Input";
import { cityFilter } from "./companySlice";

function CompanyHeader() {
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState("");
  const cityValue = useSelector((state) => state?.company?.cityName);
  const options = [
    { value: "name", label: "Name" },
    { value: "average", label: "Average" },
    { value: "rating", label: "Rating" },
    { value: "location", label: "Location" },
  ];

  return (
    <div className="flex h-[125px] w-full items-center justify-between p-6">
      <div className="flex items-end justify-start gap-3">
        <div className="flex w-auto flex-col items-start justify-center gap-1">
          <Text size="lg">Select city</Text>
          <Input
            placeholder="city..."
            type="text"
            className="h-[35px] gap-2.5 rounded-md border border-gray-500_02 px-2 font-light !text-black-900_01 sm:pr-5"
            onChange={(e) => setSelectedCity(e)}
            value={selectedCity}
            rightIcon={<CiLocationOn className="text-xl" />}
          />
        </div>
        <Button
          variant="fill"
          shape="round"
          onClick={() => dispatch(cityFilter(selectedCity))}
        >
          Find company
        </Button>
      </div>
      <div className="flex items-end justify-center gap-9">
        <AddCompanyModal />
        <div className="flex flex-col items-start justify-center gap-1">
          <Text size="lg">Sort</Text>
          <Dropdown options={options} />
        </div>
      </div>
    </div>
  );
}

export default CompanyHeader;
