import React from 'react';
import{ Swiper,SwiperSlide} from 'swiper/react';
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";
import 'swiper/css';
const Banner = () => {
    return (
       
             <Swiper
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
      <div style={{display:'flex',justifyContent:'space-evenly',alignItems: 'center'}}>

       <div>
        <p>NEW CAMERA</p>
        <p>12MP <span>F/2.3</span></p>
        <p>8K <span>VIDEO</span></p>
        <button className="btn btn-accent">Button</button>
       </div>
      <img src="https://i.ibb.co/NFYPH2F/slide1-electronic-1.png" alt=""/>
      </div>
     
      </SwiperSlide>
      <SwiperSlide>
      <div style={{display:'flex',justifyContent:'space-evenly',alignItems: 'center'}}>

       <h1>Lets do some shopping here come on </h1>
       <img src="https://i.ibb.co/mFPtbbf/slide2-electronic1.png" alt=""/>
      </div>
     
      </SwiperSlide>
      <SwiperSlide>
      <div style={{display:'flex',justifyContent:'space-around',alignItems: 'center'}}>

       <h1>Lets do some shopping here come on </h1>
       <img src="https://i.ibb.co/mFPtbbf/slide2-electronic1.png" alt=""/>
      </div>
     
      </SwiperSlide>



      
      
    </Swiper>
    
    );
};

export default Banner;