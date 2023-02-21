import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay } from "swiper";
import 'swiper/css';
import './banner.css'
import { FcViewDetails, FcFlashOn, FcOrgUnit, FcMultipleDevices, FcWebcam, FcMultipleSmartphones, FcShop, FcSelfie } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
      <div className=" flex justify-center flex-row h-1/4 overflow-hidden pb-5 pt-5 pr-10 w-[90%] mx-auto">
        {/* the first hover with navigation part will be here  */}
        <div className=' divide-y divide-gray-300 bg-[#eff6fd] w-1/4 mx-auto p-5'>
          {/* banner category area */}
          <h2 className='text-xl font-bold mb-5'>Categoriess</h2>
          <div className="all-category-area space-y-5 font-bold text-base mt-5 list-none cursor-pointer pt-5">
            {/* single catagory */}
            <li className='flex items-center'>
              <div className='rounded-full p-[10px] bg-slate-300 mr-3'>
                <FcViewDetails className='w-full h-[20px]' />
              </div>
              <span>All Categories</span>
            </li>
            {/* single catagory */}
            <li className='flex items-center'>
              <div className='rounded-full p-[10px] bg-slate-300 mr-3'>
                <FcFlashOn className='w-full h-[20px]' />
              </div>
              <span>Top Offers</span>
            </li>
            {/* single catagory */}
            <li className='flex items-center'>
              <div className='rounded-full p-[10px] bg-slate-300 mr-3'>
                <FcOrgUnit className='w-full h-[20px]' />
              </div>
              <span>Games & Accessoris</span>
            </li>
            <li></li>
            {/* single catagory */}
            <li className='flex items-center'>
              <div className='rounded-full p-[10px] bg-slate-300 mr-3'>
                <FcMultipleSmartphones className='w-full h-[20px]' />
              </div>
              <span> Phone & Tablet</span>
            </li>
            {/* single catagory */}
            <li className='flex items-center'>
              <div className='rounded-full p-[10px] bg-slate-300 mr-3'>
                <FcMultipleDevices className='w-full h-[20px]' />
              </div>
              <span>Computer & Laptop</span>
            </li>
            {/* single catagory */}
            <li className='flex items-center'>
              <div className='rounded-full p-[10px] bg-slate-300 mr-3'>
                <FcSelfie className='w-full h-[20px]' />
              </div>
              <span>Jewlery & Beauty</span>
            </li>
            {/* single catagory */}
            <li className='flex items-center'>
              <div className='rounded-full p-[10px] bg-slate-300 mr-3'>
                <FcShop className='w-full h-[20px]' />
              </div>
              <span>Fashion</span>
            </li>
            {/* single catagory */}
            <li className='flex items-center'>
              <div className='rounded-full p-[10px] bg-slate-300 mr-3'>
                <FcWebcam className='w-full h-[20px]' />
              </div>
              <span>Web & Camera</span>
            </li>
          </div>
          {/* banner category area */}
        </div>

        {/* and this is the caruousel part  */}
        <Swiper className="w-3/4 h-1/2 basis-3/4 float-right	"
          effect={"cube"}
          rewind={true}
          navigation={true}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Autoplay, Pagination]}
        >
          <SwiperSlide>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

              <div>
                <p className='text-5xl font-bold my-4'>NEW <span className='text-blue-700'>MOBILE</span></p>
                <p className='text-5xl font-bold my-4'>12MP <span className='font-normal'>F/2.3</span></p>
                <p className='text-5xl font-bold'>8K <span className='font-normal'>VIDEO</span></p>
                <Link to="/shop"><button className="btn btn-wide bg-primary-all my-9">Shop Now</button></Link>
              </div>
              <img className='box-border' src="https://i.ibb.co/NFYPH2F/slide1-electronic-1.png" height="80%" alt="" />
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

              <div>
                <p className='text-5xl font-bold my-4'>NEW <span className='text-blue-700'>LAPTOP</span></p>
                <p className='text-5xl font-bold my-4'>12MP <span className='font-normal'>F/2.3</span></p>
                <p className='text-5xl font-bold'>12K <span className='font-normal'>VIDEO</span></p>
                <Link to="/shop"><button className="btn btn-wide bg-primary-all my-9">Shop Now</button></Link>
              </div>
              <img src="https://i.ibb.co/mFPtbbf/slide2-electronic1.png" alt="" />
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

              <div>
                <p className='text-5xl font-bold my-4 '>NEW <span className='text-blue-700'>CAMERA</span></p>
                <p className='text-5xl font-bold my-4'>12MP <span className='font-normal'>F/2.3</span></p>
                <p className='text-5xl font-bold'>8K <span className='font-normal'>VIDEO</span></p>
                <Link to="/shop"><button className="btn btn-wide bg-primary-all my-9">Shop Now</button></Link>
              </div>
              <img src="https://i.ibb.co/FxYgbP4/slide3-electronic1.png" alt="" />
            </div>

          </SwiperSlide>

        </Swiper>
      </div>
    </>

  );
};

export default Banner;