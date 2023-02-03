import React from 'react';
import{ Swiper,SwiperSlide} from 'swiper/react';
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";
import 'swiper/css';
const Banner = () => {
    return (
       
             <Swiper className="w-3/4 h-1/2  float-right	"
             effect={"cube"}
             grabCursor={true}
             cubeEffect={{
               shadow: true,
               slideShadows: true,
               shadowOffset: 20,
               shadowScale: 0.94,
             }}
             pagination={true}
             modules={[EffectCube, Pagination]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div style={{display:'flex',justifyContent:'center',alignItems: 'center'}}>

       <div>
        <p className='text-5xl font-bold my-4'>NEW MOBILE</p>
        <p className='text-5xl font-bold my-4'>12MP <span className='font-normal'>F/2.3</span></p>
        <p className='text-5xl font-bold'>8K <span className='font-normal'>VIDEO</span></p>
        <button  className="btn btn-wide my-9">Wide</button>
       </div>
      <img src="https://i.ibb.co/NFYPH2F/slide1-electronic-1.png" alt=""/>
      </div>
     
      </SwiperSlide>
      <SwiperSlide>
      <div style={{display:'flex',justifyContent:'center',alignItems: 'center'}}>

       <div>
        <p className='text-5xl font-bold my-4'>NEW LAPTOP</p>
        <p className='text-5xl font-bold my-4'>12MP <span className='font-normal'>F/2.3</span></p>
        <p className='text-5xl font-bold'>12K <span className='font-normal'>VIDEO</span></p>
        <button  className="btn btn-wide my-9">Wide</button>
       </div>
       <img src="https://i.ibb.co/mFPtbbf/slide2-electronic1.png" alt=""/>
      </div>
     
      </SwiperSlide>
      <SwiperSlide>
      <div style={{display:'flex',justifyContent:'center',alignItems: 'center'}}>

       <div>
        <p className='text-5xl font-bold my-4'>NEW CAMERA</p>
        <p className='text-5xl font-bold my-4'>12MP <span className='font-normal'>F/2.3</span></p>
        <p className='text-5xl font-bold'>8K <span className='font-normal'>VIDEO</span></p>
        <button  className="btn btn-wide my-9">Wide</button>
       </div>
      <img src="https://i.ibb.co/FxYgbP4/slide3-electronic1.png" alt=""/>
      </div>
     
      </SwiperSlide>

    </Swiper>
    
    );
};

export default Banner;