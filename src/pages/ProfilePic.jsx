import React from "react";
import profile from "../assets/profile.jpeg";

const ProfilePic = () => {
  return (
    <div className="flex justify-center">
      <img
        src={profile}
        alt="Profile Photo"
        className="
          w-full
          h-auto
          object-cover
          rounded-full
          shadow-lg
        "
      />
    </div>
  );
};

export default ProfilePic;
