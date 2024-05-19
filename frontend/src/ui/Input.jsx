import React from "react";
import "../index.css";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[9px]",
};

const variants = {
  fill: {
    white_A700_01: "bg-white-A700_01 text-gray-600_03",
    gray_50_01: "bg-gray-50_01",
  },
  underline: {
    black_900_01: "text-black-900_01 border-b border-black-900_01 border-solid",
  },
};

const sizes = {
  md: "h-[40px] px-3 text-sm",
  lg: "h-[54px] px-[22px] text-sm",
  sm: "h-[31px] text-base",
  "2xl": "h-[57px] pl-6",
  xs: "h-[30px] pl-3 pr-[35px] text-[10px]",
  xl: "h-[57px] pl-[19px] pr-[35px] text-sm",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      maxDate,
      shape,
      error,
      onFocus,
      onBlurCap,
      maxlength,
      variant = "fill",
      size = "sm",
      color = "white_A700_01",
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };
    return (
      <>
        <div
          className={`${className} flex items-center border-solid  ${
            (shape && shapes[shape]) || ""
          } ${variants[variant]?.[color] || variants[variant] || ""} ${
            sizes[size] || ""
          }`}
        >
          {!!label && label}
          <input
            ref={ref}
            type={type}
            name={name}
            max={type === "date" ? maxDate : null}
            onChange={handleChange}
            placeholder={placeholder}
            maxlength={maxlength}
            onFocus={onFocus}
            onBlurCapture={onBlurCap}
            className="w-full"
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {error && <span className="text-sm text-red-A700">{error}</span>}
      </>
    );
  }
);

export { Input };
