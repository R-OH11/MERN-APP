import React from "react";

const sizes = {
  "5xl": "text-xl font-medium font-poppins",
  xs: "text-[6px] font-normal leading-[9px]",
  lg: "text-[14px] font-normal font-poppins",
  "6xl": "text-[20px] font-normal font-poppins",
  "7xl": "text-3xl font-medium md:text-[28px] sm:text-[26px] font-poppins",
  "8xl": "text-[55px] font-medium md:text-[47px] sm:text-[41px]",
  sm: "text-[8px] font-normal",
  "2xl": "text-[18px] font-normal font-poppins",
  "3xl": "text-[16px] font-normal font-poppins",
  "4xl": "text-base font-normal",
  xl: "text-[14px] font-semibold font-poppins",
  md: "text-[12px] font-normal font-poppins",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`font-nunito text-gray-600_03 ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
