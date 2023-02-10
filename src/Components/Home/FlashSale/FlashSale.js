import React, {useState, useEffect} from 'react';
import FlashSingleProduct from '../FlashSingleProduct/FlashSingleProduct';
import productImage from "../../../imagess/product-1.png"
import headphone from "../../../imagess/head.png"
import tv from "../../../imagess/tv-product.png"
import oven from "../../../imagess/oven.png"
import productImage2 from "../../../imagess/product-2.png"

const FlashSale = () => {
    const [second, setSecond] = useState(9);
  const [minute, setMinute] = useState(12);
  const [hour, setHour] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
        if(second === 0 && minute === 0 && hour === 0){
            clearInterval(intervalId)
        }else{
            if(second === 0 && minute ===0){
                setHour(hour -1)
                setMinute(60)
            }else{
                if(second === 0){
                setMinute(minute-1)
                setSecond(59)
                }else{
                    setSecond(second-1)
                }
            }
        }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [second, minute, hour]);


    return (
        <div>
            <div className="flashsale-area w-11/12 mx-auto pb-10">
                <div className="top-content-flashsale inline-flex pb-10 space-x-5">
                    <h2 className='font-bold text-xl'>Flash Sale Today!</h2>
                    <p>Deals ends in :</p>
                    {/* count-down start */}
                    <div className="count-down">
                        <span className="countdown font-sans text-base bg-red-600 text-white p-2">
                            <span style={{ "--value": hour }}></span>h:
                            <span style={{ "--value": minute }}></span>m:
                            <span style={{ "--value": second }}></span>s
                        </span>
                    </div>
                </div>
                {/* single Flash Product */}
                <div className="single_Flash_Prouct-area">
                    <div className="grid grid-cols-5 gap-4">
                        <FlashSingleProduct image={productImage} />
                        <FlashSingleProduct image={headphone} />
                        <FlashSingleProduct image={tv} />
                        <FlashSingleProduct image={oven} />
                        <FlashSingleProduct image={productImage2} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashSale;