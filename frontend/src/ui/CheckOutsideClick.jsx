import React, { useState, useEffect, useRef } from "react";

function CheckOutsideClick({ onClickOutside, children }) {
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClickOutside && onClickOutside();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.addEventListener("click", handleClickOutside, true);
    };
  }, []);
  if (!children) return null;

  return <div ref={ref}>{children}</div>;
}

export default CheckOutsideClick;
