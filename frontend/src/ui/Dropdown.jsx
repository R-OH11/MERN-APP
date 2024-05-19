import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { sort } from "../features/Company/companySlice";

function Dropdown({ options }) {
  const dispatch = useDispatch();

  const selectedOption = useSelector((state) => state?.company?.sortBy);
  console.log("sort", selectedOption);
  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={(e) => dispatch(sort(e))}
        options={options}
      />
    </div>
  );
}

export default Dropdown;
