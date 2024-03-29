import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Box2 = ({ title, img }) => {
  return (
    <div className="md:flex md:flex-column justify-between my-8 space-y-5 md:space-y-0">
      <div className="left">
        <img src={img} alt="Album" />
      </div>
      <div className="right flex items-center">
        <div>
          <button className="md:btn md:btn-error p-3 font-bold bg-red-400 rounded">who are we?</button>
          <h2 className="font-bold text-3xl text-black py-5">{title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam{" "}
            <br /> eros ipsum, vitae aliquam quam eleifend at. Sed iaculis amet
            volutpat <br /> nibh, at mattis felis. Nam quam dolor, efficitur ac
            elit pellentesque..
          </p>
          <p className="font-bold py-5 flex items-center text-sm">
            <span className="pr-2">VIEW MORE </span>
            <FaLongArrowAltRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Box2;
