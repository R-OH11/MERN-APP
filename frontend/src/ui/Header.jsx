import React from "react";
import { Text } from "./Text";
import { Img } from "./Img";
import Searchbar from "./Searchbar";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

function Header() {
  return (
    <div className="flex items-start justify-between self-stretch bg-white-A700 p-3 pl-[40px] pr-[60px] shadow-xs">
      <div className="flex items-center justify-start gap-2">
        <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-gradient-to-br from-purple-600 to-blue-600">
          <Img src="/images/star.png" className="h-[18px] w-[18px] " />
        </div>
        <Text size="6xl">
          <span>Review</span>
          <span className="inline-block bg-gradient-to-br from-purple-600 to-blue-600 bg-clip-text text-transparent">
            &
          </span>
          <span className="text-black-900_01">RATE</span>
        </Text>
      </div>
      <div className=" flex w-[50%] items-center justify-around gap-3">
        <Searchbar
          placeholder="Search..."
          rightIcon={
            <HiOutlineMagnifyingGlass className="inline-block text-2xl" />
          }
        />
        <Text size="2xl" className="!text-black-900_01">
          Signup
        </Text>
        <Text size="2xl" className="!text-black-900_01">
          Login
        </Text>
      </div>
    </div>
  );
}

export default Header;
