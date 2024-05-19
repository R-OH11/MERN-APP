import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[9px]",
};
const variants = {
  tarOutlineGray60003:
    "border-gray-600_03 border border-solid bg-white-A700_01",
  tarOutlineGray50002:
    "border-gray-500_02 border border-solid bg-white-A700_01",
};
const sizes = {
  xs: "h-[75px] p-3.5 text-[10px]",
  md: "h-[250px] p-4 text-xs",
  sm: "h-[120px] p-6 text-sm",
};

const TextArea = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      shape,
      size = "sm",
      variant = "tarOutlineGray50002",
      onChange,
      onFocus,
      isDisabled,
      maxlength = "2500",
      error,
      onBlurCap,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${(shape && shapes[shape]) || ""} ${
            sizes[size] || ""
          } ${variants[variant] || ""}`}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={isDisabled}
          onFocus={onFocus}
          maxlength={maxlength}
          onBlurCapture={onBlurCap}
          {...restProps}
        />
        {error && <span className="text-sm text-red-A700">{error}</span>}
      </>
    );
  }
);

export { TextArea };
