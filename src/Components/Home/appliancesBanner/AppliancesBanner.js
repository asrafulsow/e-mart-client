import React from "react";
import banner1 from "../../../images/banner-3-electronic-1.jpg";
import banner2 from "../../../images/banner-4-electronic-1.jpg";
import banner3 from "../../../images/banner-5-electronic-1.jpg";
import "./appliancesBanner.css";
import { FaLongArrowAltRight } from 'react-icons/fa';

const AppliancesBanner = () => {
  return (
    <div className="w-11/12 mx-auto pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20 mb-20">
      <div className="appliancesBanner h-[55vw] md:h-[30vw] lg:h-[17vw] relative">
        <div className="h-full w-full appliancesBannerImgDiv">
          <img src={banner1} alt="" className="w-full h-full" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          <div className="ml-8">
            <p className="uppercase font-semibold text-[#F50000]">New arrivals</p>
            <h4 className="uppercase text-2xl font-[800] ">High bass <br /> headphone</h4>
            <button className="flex items-center border-none py-1 px-2 font-bold bg-[black] text-white text-xs mt-4 appliancesShopBtn"><p className="uppercase">Shop now</p> <FaLongArrowAltRight style={{ fontSize: "1.5em", marginLeft: "5px" }} /></button>
          </div>

        </div>
      </div>
      <div className="appliancesBanner h-[55vw] md:h-[30vw] lg:h-[17vw] relative">
        <div className="h-full w-full appliancesBannerImgDiv">
          <img src={banner2} alt="" className="w-full h-full" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          <div className="ml-8">
            <p className="uppercase font-semibold text-[#F50000]">Coming soon</p>
            <h4 className="uppercase text-2xl font-[800] text-white ">Digital <br /> X-E200</h4>
            <button className="flex items-center border-none py-1 px-2 font-bold bg-white text-black text-xs mt-4 appliancesShopBtn2"><p className="uppercase">Shop now</p> <FaLongArrowAltRight style={{ fontSize: "1.5em", marginLeft: "5px" }} /></button>
          </div>

        </div>
      </div>
      <div className="appliancesBanner h-[55vw] md:h-[30vw] lg:h-[17vw] relative">
        <div className="h-full w-full appliancesBannerImgDiv">
          <img src={banner3} alt="" className="w-full h-full" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          <div className="ml-8">
            <p className="uppercase font-semibold text-[#F50000]">LG life good</p>
            <h4 className="uppercase text-2xl font-[800] ">A perfect <br /> wash</h4>
            <button className="flex items-center border-none py-1 px-2 font-bold bg-[black] text-white text-xs mt-4 appliancesShopBtn"><p className="uppercase">Shop now</p> <FaLongArrowAltRight style={{ fontSize: "1.5em", marginLeft: "5px" }} /></button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppliancesBanner;
