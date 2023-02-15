import React, { useState } from 'react';
import FlashSingleProduct from '../Home/FlashSingleProduct/FlashSingleProduct';
import productMobile from "../../imagess/mobile-product.png"

const ShopPage = () => {
    const mobileItemList = [
        "Iphone",
        "Samsung",
        "Vivo",
        "Oppo",
        "OnePlus",
        "Hauwei",
        "Mobile Charger",
        "Mobile Case",
        "Tablet",
        "Tumpart Glass",
    ];
    return (
        <div>
            {/* top shop page area just breadcumb */}
            <div className="top-shop-page-area">
                <div className="top-bradcum-area bg-sky-100">
                    <div className="text-sm breadcrumbs w-11/12 mx-auto pb-10 p-5">
                        <p className='text-xl font-bold pb-5'>Shop Page</p>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>Documents</a></li>
                            <li>Add Document</li>
                        </ul>
                    </div>
                </div>
                {/* bottom shop page area product list and price filter */}
                <div className="bottom-shop-area w-11/12 mx-auto pb-10 p-5">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-1">
                            <div className="shop-by-catagory-area text-left">
                                <h3 className='text-base font-bold'>SHOP BY CATEGORIES</h3>
                                {/* catagory collaps area start */}
                                <div className="catagory-collaps-area">
                                    <div tabIndex={0} className="collapse collapse-plus">
                                        <div className="collapse-title font-medium text-gray-400">
                                            <p>Accessories</p>
                                        </div>
                                        <div className="collapse-content">
                                            {mobileItemList.map((itemList) => (
                                                <p
                                                    key={itemList}
                                                    className="p-1 cursor-pointer hover:text-red-600 text-gray-700"
                                                >
                                                    {itemList}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* catagory collaps area end */}
                                {/* catagory collaps area start */}
                                <div className="catagory-collaps-area">
                                    <div tabIndex={0} className="collapse collapse-plus">
                                        <div className="collapse-title font-medium text-gray-400">
                                            <p>Camera And Photos</p>
                                        </div>
                                        <div className="collapse-content">
                                            {mobileItemList.map((itemList) => (
                                                <p
                                                    key={itemList}
                                                    className="p-1 cursor-pointer hover:text-red-600 text-gray-700"
                                                >
                                                    {itemList}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* catagory collaps area end */}
                                {/* catagory collaps area start */}
                                <div className="catagory-collaps-area">
                                    <div tabIndex={0} className="collapse collapse-plus">
                                        <div className="collapse-title font-medium text-gray-400">
                                            <p>Accessories</p>
                                        </div>
                                        <div className="collapse-content">
                                            {mobileItemList.map((itemList) => (
                                                <p
                                                    key={itemList}
                                                    className="p-1 cursor-pointer hover:text-red-600 text-gray-700"
                                                >
                                                    {itemList}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* catagory collaps area end */}
                                {/* catagory collaps area start */}
                                <div className="catagory-collaps-area">
                                    <div tabIndex={0} className="collapse collapse-plus">
                                        <div className="collapse-title font-medium text-gray-400">
                                            <p>Game And Accessories</p>
                                        </div>
                                        <div className="collapse-content">
                                            {mobileItemList.map((itemList) => (
                                                <p
                                                    key={itemList}
                                                    className="p-1 cursor-pointer hover:text-red-600 text-gray-700"
                                                >
                                                    {itemList}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* catagory collaps area end */}
                                {/* catagory collaps area start */}
                                <div className="catagory-collaps-area">
                                    <div tabIndex={0} className="collapse collapse-plus">
                                        <div className="collapse-title font-medium text-gray-400">
                                            <p>Computer And Laptop</p>
                                        </div>
                                        <div className="collapse-content">
                                            {mobileItemList.map((itemList) => (
                                                <p
                                                    key={itemList}
                                                    className="p-1 cursor-pointer hover:text-red-600 text-gray-700"
                                                >
                                                    {itemList}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* catagory collaps area end */}
                            </div>
                            {/* price catagory filter area */}
                            <div className="price-catagory-filter-area">
                                <h3 className='text-base font-bold pb-8 pt-5'>Price</h3>
                                <div className="price-range-content">
                                    <input type="range" min="0" max="100" value="25" className="range" step="25" />
                                    <div className="w-full flex justify-between text-xs px-2">
                                        <span>|</span>
                                        <span>|</span>
                                        <span>|</span>
                                        <span>|</span>
                                        <span>|</span>
                                    </div>
                                    <div className="bottom-price-range-content flex justify-between pt-4">
                                        <p className=''>price: $10 - $1000</p>
                                        <p className='underline font-bold'>Filter</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-5">
                            {/* top-product-catagory checkbox area filter */}
                            <div className="top-product-catagory-area">

                            </div>
                            {/* shop product grid area */}
                            <div className="grid grid-cols-4 gap-6">
                                <FlashSingleProduct image={productMobile} />
                                <FlashSingleProduct image={productMobile} />
                                <FlashSingleProduct image={productMobile} />
                                <FlashSingleProduct image={productMobile} />
                                <FlashSingleProduct image={productMobile} />
                                <FlashSingleProduct image={productMobile} />
                                <FlashSingleProduct image={productMobile} />
                                <FlashSingleProduct image={productMobile} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;