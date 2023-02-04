import React from 'react';
import{ Swiper,SwiperSlide} from 'swiper/react';
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";
import 'swiper/css';
import './banner.css'
const Banner = () => {
    return (
       
           <>
           
           <div className=" flex justify-center flex-row h-1/4 overflow-hidden p-10 ">
            {/* the first hover with navigation part will be here  */}
<div className='basis-1/4 flex flex-col divide-y divide-slate-200 '>
<button className="w-full hover:bg-violet-300 text-xl border-black-600 h-12">HOT DEALS </button>
<button className="w-full hover:bg-violet-300  text-xl border-black-600 h-12">WINTER SALE  </button>
<button className="w-full hover:bg-violet-300  text-xl border-black-600 h-12">BLACK FRIDAY OFFER  </button>
<button className="w-full hover:bg-violet-300  text-xl border-black-600 h-12">TOP PC WITH OFFER </button>
<button className="w-full hover:bg-violet-300  text-xl border-black-600 h-12">TRENDING TECHS</button>
<button className="w-full hover:bg-violet-300  text-xl border-black-600 h-12">FLASH SALE </button>
<button className="w-full hover:bg-violet-300  text-xl border-black-600 h-12">NEW MOBILE SALE </button>
<button className="w-full hover:bg-violet-300  text-xl border-black-600 h-12">NEW LAPTOPS </button>
<button className="w-full hover:bg-violet-300  text-xl border-black-600 h-12">EXCESSORIES </button>

</div>

            {/* and this is the caruousel part  */}
           <Swiper className="w-3/4 h-1/2 basis-3/4 float-right	"
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
      <img className='box-border' src="https://i.ibb.co/NFYPH2F/slide1-electronic-1.png" height="80%" alt=""/>
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
           </div>
           </>
    
    );
};

export default Banner;