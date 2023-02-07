import React from 'react';
import FlashSingleProduct from '../FlashSingleProduct/FlashSingleProduct';
import productImage from "../../../imagess/product-1.png"
import headphone from "../../../imagess/head.png"
import tv from "../../../imagess/tv-product.png"
import oven from "../../../imagess/oven.png"
import productImage2 from "../../../imagess/product-2.png"

const FlashSale = () => {
    return (
        <div>
            <div className="flashsale-area w-11/12 mx-auto pb-10">
                <div className="top-content-flashsale inline-flex pb-10 space-x-5">
                    <h2 className='font-bold text-xl'>Flash Sale Today!</h2>
                    <p>Deals ends in :</p>
                    {/* count-down start */}
                    <div className="count-down">
                        <span className="countdown font-sans text-base bg-red-600 text-white p-2">
                            <span style={{ "--value": 10 }}></span>h:
                            <span style={{ "--value": 24 }}></span>m:
                            <span style={{ "--value": 35 }}></span>s
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