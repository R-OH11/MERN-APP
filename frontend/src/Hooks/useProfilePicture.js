import React, { useState, useRef } from "react";

export function useProfilePicture() {
  const imageRef = useRef(null);
  const [thumbnail, setThumbnail] = React.useState([]);
  const [thumbURL, setThumbUrl] = React.useState();
  const onThumbnail = (e) => {
    if (e.target.files.length > 0) {
      if (!/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(e.target.files[0]?.name)) {
        setThumbUrl([]);
        setThumbUrl(URL.createObjectURL(e.target.files[0]));
      } else {
        setThumbnail(e.target.files[0]);
        setThumbUrl([]);
        setThumbUrl(URL.createObjectURL(e.target.files[0]));
        // setContext({ ...context, profileImage: e.target.files[0] });
      }
    }
  };

  const handleClick = (e) => {
    imageRef.current.click();
  };

  return { handleClick, thumbURL, thumbnail, imageRef, onThumbnail };
}
