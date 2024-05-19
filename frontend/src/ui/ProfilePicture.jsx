import React, { useEffect } from "react";
import { useProfilePicture } from "../Hooks/useProfilePicture";
import logo from "/images/company-logo.jpg";
import { MdOutlineEdit } from "react-icons/md";

function ProfilePicture({ getProfilePicture }) {
  const { handleClick, thumbnail, thumbURL, imageRef, onThumbnail } =
    useProfilePicture();

  useEffect(() => {
    getProfilePicture(thumbnail);
  }, [thumbnail]);

  return (
    <div>
      <div className="mt-[10px] flex w-full justify-center">
        <div className=" m relative md:h-[72px] md:w-[70px]">
          <img
            src={thumbURL ?? logo}
            className=" h-[100px] w-[100px] cursor-pointer rounded-[50%] md:h-[75px] md:w-[75px]"
            alt="profile"
            onClick={handleClick}
          />
          <input
            ref={imageRef}
            id="file-input"
            type="file"
            name="img"
            accept="image/png, image/gif, image/jpeg 'image/svg+xml'"
            style={{ display: "none" }}
            onChange={onThumbnail}
          />
          <MdOutlineEdit
            className="absolute bottom-[1%] right-[10px] h-10 w-5 cursor-pointer md:left-[35px] md:top-[105px] md:h-5"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfilePicture;
