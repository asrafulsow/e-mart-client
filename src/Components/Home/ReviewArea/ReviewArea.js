import React, { useRef, useState } from 'react';
import Ratting from '../Ratting/Ratting';
import SingleReview from './SingleReview';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css"
import "./swiperStyle.css"

// import required modules
import { EffectCoverflow } from "swiper";


const ReviewArea = () => {
    return (
        <div className='p-4 bg-slate-100'>
            <div className='review-area w-11/12 mx-auto'>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 80,
                        stretch: 4,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow]}
                    className="mySwiper text-center"
                >
                    <SwiperSlide className='w-[520px] h-[320px]'>
                        <SingleReview />
                    </SwiperSlide>
                    <SwiperSlide className='w-[520px] h-[320px]'>
                        <SingleReview />
                    </SwiperSlide>
                    <SwiperSlide className='w-[520px] h-[320px]'>
                        <SingleReview />
                    </SwiperSlide>
                    <SwiperSlide className='w-[520px] h-[320px]'>
                        <SingleReview />
                    </SwiperSlide>
                    <div className="button-area text-center">
                        <button className='btn btn-primary bg-teal-700 text-white'>GIVE YOUR REVIEW</button>
                    </div>
                </Swiper>

            </div>
        </div>
    );
};

export default ReviewArea;