import React from "react";
import profile from "../assets/profile.JPG"

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
           shadow-emerald-500 
          
        "
      />
    </div>
  );
};

export default ProfilePic;
