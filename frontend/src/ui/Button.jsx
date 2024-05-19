import React from "react";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    blue_800_01:
      "bg-gradient-to-br from-purple-600 to-blue-600 shadow-xs text-white-A700_01",
    blue_gray_50_01: "bg-gray-200 text-black-900_01",
    black_900_01: "bg-black-900_01 shadow-xs text-white-A700_01",
    black_900_30: "bg-black-900_30 shadow-xs text-white-A700_01",
    blue_50: "bg-blue-50 text-blue-A200",
    gray_500: "bg-gray-500 shadow-xs text-white-A700_01",
    gray_100: "bg-gray-100",
    blue_gray_50: "bg-blue_gray-50 text-black-900_01",
  },
  outline: {
    blue_gray_100_02: "border-gray-400 border border-solid text-gray-600",
    blue_800_01: "border-blue-800_01 border border-solid text-blue-800_01",
  },
};
const sizes = {
  sm: "h-[22px] px-2 text-xs",
  xs: "h-[18px] px-2.5 text-[6px]",
  "4xl": "h-[55px] px-3",
  "5xl": "h-[57px] px-[19px] text-3xl",
  md: "h-[32px] px-5 text-base",
  "2xl": "h-[41px] px-[18px] font-bold",
  xl: "h-[40px] px-[15px] text-xs",
  "3xl": "h-[54px] px-[35px] text-base font-bold",
  lg: "h-[36px] px-2.5 text-xs",
};

const Button = ({
  children,
  disabled,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "lg",
  color = "blue_800_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex cursor-pointer items-center justify-center text-center ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      } ${disabled && "cursor-default bg-gray-400"}`}
      {...restProps}
      disabled={disabled}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
