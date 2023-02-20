import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay } from "swiper";
import 'swiper/css';
import './banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFontAwesome, faIdeal, faPeriscope, faAlipay, faSistrix, faKaggle } from '@fortawesome/free-brands-svg-icons'
import { faEarDeaf, faEarListen, faEarth, faLadderWater } from '@fortawesome/free-solid-svg-icons';


const Banner = () => {
  return (

    <>

      <div className=" flex justify-center flex-row h-1/4 overflow-hidden p-10 ">
        {/* the first hover with navigation part will be here  */}
        <div className='basis-1/4 flex flex-col divide-y divide-gray-300 font-mono'>
          <button className="w-full hover:bg-violet-300 text-xl text-left border-black-600 h-12"> <FontAwesomeIcon icon={faIdeal} className="mx-3" />Hot Deals</button>
          <button className="w-full hover:bg-violet-300  text-xl text-left border-black-600 h-12"> <FontAwesomeIcon icon={faPeriscope} className="mx-3" />WINTER SALE</button>
          <button className="w-full hover:bg-violet-300  text-xl text-left border-black-600 h-12"> <FontAwesomeIcon icon={faAlipay} className="mx-3" />BLACK FRIDAY OFFER  </button>
          <button className="w-full hover:bg-violet-300  text-xl text-left border-black-600 h-12"> <FontAwesomeIcon icon={faSistrix} className="mx-3" />TOP PC WITH OFFER </button>
          <button className="w-full hover:bg-violet-300  text-xl text-left border-black-600 h-12"> <FontAwesomeIcon icon={faKaggle} className="mx-3" />TRENDING TECHS</button>
          <button className="w-full hover:bg-violet-300  text-xl text-left border-black-600 h-12"> <FontAwesomeIcon icon={faEarDeaf} className="mx-3" />FLASH SALE </button>
          <button className="w-full hover:bg-violet-300  text-xl text-left border-black-600 h-12"> <FontAwesomeIcon icon={faEarListen} className="mx-3" />NEW MOBILE SALE </button>
          <button className="w-full hover:bg-violet-300  text-xl text-left border-black-600 h-12"><FontAwesomeIcon icon={faEarth} className="mx-3" /> NEW LAPTOPS </button>
          <button className="w-full hover:bg-violet-300  text-xl text-left border-black-600 h-12"><FontAwesomeIcon icon={faLadderWater} className="mx-3" /> EXCESSORIES </button>

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
                <p className='text-5xl font-bold my-4'>NEW MOBILE</p>
                <p className='text-5xl font-bold my-4'>12MP <span className='font-normal'>F/2.3</span></p>
                <p className='text-5xl font-bold'>8K <span className='font-normal'>VIDEO</span></p>
                <button className="btn btn-wide my-9">Wide</button>
              </div>
              <img className='box-border' src="https://i.ibb.co/NFYPH2F/slide1-electronic-1.png" height="80%" alt="" />
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

              <div>
                <p className='text-5xl font-bold my-4'>NEW LAPTOP</p>
                <p className='text-5xl font-bold my-4'>12MP <span className='font-normal'>F/2.3</span></p>
                <p className='text-5xl font-bold'>12K <span className='font-normal'>VIDEO</span></p>
                <button className="btn btn-wide my-9">Wide</button>
              </div>
              <img src="https://i.ibb.co/mFPtbbf/slide2-electronic1.png" alt="" />
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

              <div>
                <p className='text-5xl font-bold my-4 '>NEW CAMERA</p>
                <p className='text-5xl font-bold my-4'>12MP <span className='font-normal'>F/2.3</span></p>
                <p className='text-5xl font-bold'>8K <span className='font-normal'>VIDEO</span></p>
                <button className="btn btn-wide my-9">Wide</button>
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