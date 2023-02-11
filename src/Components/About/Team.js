import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";

const Team = ({ team }) => {
  const { name, image, designation } = team;
  return (
    <div className="">
      <div className="flex justify-center items-center lg:flex-column py-5 bg-base-100 shadow-xl">
        <div className="avatar">
          <div className="w-32 rounded-full">
            <img src={image} alt={name} />
          </div>
        </div>
        <div className="pl-5">
          <p className="text-gray-500">
            <small>{designation}</small>
          </p>
          <p className="text-xl text-black font-bold">{name}</p>

          <small className="flex items-center justify-between">
            {" "}
            <span> Follow :</span>
            <BsFacebook /> <BsLinkedin />
          </small>
        </div>
      </div>
    </div>
  );
};

export default Team;
