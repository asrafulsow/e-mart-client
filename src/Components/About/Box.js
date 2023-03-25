import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Box = ({ title, img }) => {
  return (
    <div className="md:flex md:flex-column justify-between my-8 ">
      <div className="left flex items-center">
        <div>
          <button className="md:btn md:btn-error p-3 font-bold bg-red-400 rounded">who are we?</button>
          <h2 className="font-bold md:text-3xl text-xl text-black py-5">{title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam{" "}
            <br /> eros ipsum, vitae aliquam quam eleifend at. Sed iaculis amet
            volutpat <br /> nibh, at mattis felis. Nam quam dolor, efficitur ac
            elit pellentesque..
          </p>
          <p className="font-bold py-5 flex items-center text-sm">
            <span className="pr-2 cursor-pointer">VIEW MORE </span>
            <FaLongArrowAltRight />
          </p>
        </div>
      </div>
      <div className="right">
        <img src={img} alt="Album" />
      </div>
    </div>
  );
};

export default Box;
