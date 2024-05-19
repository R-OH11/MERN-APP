import React from "react";
import { Input } from "./Input";
import { HiXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { cityFilter, globalSearch } from "../features/Company/companySlice";

const Searchbar = ({ rightIcon, placeholder, type }) => {
  const dispatch = useDispatch();
  const searchedValue = useSelector((state) => state?.company?.search);

  return (
    <>
      <div className="">
        <Input
          color="gray_50_01"
          // size="md"
          name="search"
          placeholder={placeholder}
          value={searchedValue}
          onChange={(e) =>
            type === "city"
              ? dispatch(cityFilter(e))
              : dispatch(globalSearch(e))
          }
          suffix={
            searchedValue?.length > 0 ? (
              <HiXMark
                className="cursor-pointer text-2xl"
                onClick={() => dispatch(globalSearch(""))}
              />
            ) : (
              rightIcon
            )
          }
          className="text-black-900_91 flex h-[25px] w-full  items-center justify-between gap-[3px] rounded-md border border-solid border-gray-400  !px-3"
        />
      </div>
    </>
  );
};

export default Searchbar;
