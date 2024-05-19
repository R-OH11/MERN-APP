import React from "react";

const Img = ({
  className,
  src = "defaultNoData.png",
  alt = "img",
  ...restProps
}) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      {...restProps}
      loading={"lazy"}
    />
  );
};
export { Img };
