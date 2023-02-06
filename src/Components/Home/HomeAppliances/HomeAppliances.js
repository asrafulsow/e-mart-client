import React from 'react';
import coverProduct1 from "../../../imagess/coverProduct1.png"
import FlashSingleProduct from '../FlashSingleProduct/FlashSingleProduct';
import homeProduct from "../../../imagess/home-product.png"
import homeProduct1 from "../../../imagess/home-product1.png"
import homeProduct2 from "../../../imagess/home-product2.png"
import homeProduct3 from "../../../imagess/home-product3.png"
import homeProduct4 from "../../../imagess/home-product4.png"
import homeProduct5 from "../../../imagess/home-product5.png"
import homeProduct6 from "../../../imagess/home-product6.png"
import homeProduct7 from "../../../imagess/home-product7.png"

const HomeAppliances = () => {
    const mobileItemList = ["Camera", "Leans", "Ac", "Powre Bank", "Monitor", "Office Accorise", "Projector", "Headphone", "Webcam", "Fridge"];
    return (
        <div>
            <div className="smartphone-area w-11/12 mx-auto pb-10">
                {/* Smart phone section Top content area */}
                <div className="top-content-smartphones flex items-center justify-between pb-10 space-x-5">
                    <h2 className='font-bold text-xl'>Home Appliances</h2>
                    <div className="button-area space-x-2">
                        <button className="btn btn-xs bg-white text-black hover:bg-slate-900 hover:text-white">New 2023</button>
                        <button className="btn btn-xs hover:bg-slate-900 hover:text-white">Best Seller</button>
                        <button className="btn btn-xs bg-white text-black hover:bg-slate-900 hover:text-white">Top Rated</button>
                    </div>
                </div>
                {/* smart phone section bottom product area */}
                <div className="bottom-product-area">
                    <div className="grid grid-cols-6 gap-4">
                        <div className='row-span-2'>
                            <img className='h-[820px]' src={coverProduct1} alt="Cover Product" />
                        </div>
                        <div className='col-span-4'>
                            <div className="grid grid-cols-4 gap-2">
                                <FlashSingleProduct image={homeProduct} />
                                <FlashSingleProduct image={homeProduct1} />
                                <FlashSingleProduct image={homeProduct2} />
                                <FlashSingleProduct image={homeProduct3} />
                                <FlashSingleProduct image={homeProduct4} />
                                <FlashSingleProduct image={homeProduct5} />
                                <FlashSingleProduct image={homeProduct6} />
                                <FlashSingleProduct image={homeProduct7} />
                            </div>
                        </div>
                        <div className=' p-5'>
                            {
                                mobileItemList.map((itemList) => <p key={itemList} className='p-2 cursor-pointer hover:text-red-600 font-medium text-gray-700'>{itemList}</p>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAppliances;