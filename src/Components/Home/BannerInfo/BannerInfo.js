import React from 'react';
import infoBanner3 from "../../../imagess/cover.jpg"
import laptop from "../../../imagess/laptop.jpg"
import './Bannerinfo.css'
const BannerInfo = () => {
    const bannerbg = {
        background: `url(${infoBanner3})`,
        backgroundSize: 'cover',
        backgroundPosition: "bottom -38px right -32px",
        backgroundRepeat: 'norepeat',
        backgroundColor: 'rgba(45,58,74,0.5)',
    }

    const laptopbg = {
        background: `url(${laptop})`,
        backgroundSize: 'cover',
        backgroundPosition: "bottom -38px right -32px",
        backgroundRepeat: 'norepeat',
        backgroundColor: 'rgba(45,58,74,0.5)',
    }
    return (
        <div className='p-10'>
            <div className="top-info-area">
                <div className="grid grid-cols-4 gap-4">
                    <div className='flex justify-center items-center'>
                        <div className="top-info-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-5">
                                <path strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>

                        </div>
                        <div className="top-info-content">
                            <h2 className='font-bold '>DELIVERY IN 24H</h2>
                            <p className='text-gray-400'>Free shipping over $100</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center items-center'>
                            <div className="top-info-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-5">
                                    <path strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                                </svg>
                            </div>
                            <div className="top-info-content">
                                <h2 className='font-bold '>24 HOURS RETURN</h2>
                                <p className='text-gray-400'>Free return over $100</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center items-center'>
                            <div className="top-info-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-5">
                                    <path strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                </svg>

                            </div>
                            <div className="top-info-content">
                                <h2 className='font-bold '>QUALITY GUARANTEE</h2>
                                <p className='text-gray-400'>Quality checked by out team</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center items-center'>
                            <div className="top-info-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-5">
                                    <path strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                </svg>

                            </div>
                            <div className="top-info-content">
                                <h2 className='font-bold '>SUPPORT 24/7</h2>
                                <p className='text-gray-400'>Shop with an expert</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             {/* the other part of this section contained two products information  */}

            <div className="bottom-info-area pt-10 pb-10">
                <div className="info-banner w-11/12 mx-auto">
                    <div className="grid grid-cols-2 gap-3  ">
                        <div style={bannerbg} className="hovereffect">
                            <div className="inf-content space-y-3 px-[60px] py-[40px]">
                                <h5 className='text-red-700 font-bold'>NEW ARRIVALS</h5>
                                <h2 className='text-5xl font-bold text-white leading-[60px]'>ON SALE NOW <br /> BLACK FRIDAY</h2>
                                <button className='btn bg-white text-black'>Shop Now</button>
                            </div>
                        </div>
                        <div>
                            <div style={laptopbg} className="hovereffect">
                                <div className="inf-content space-y-3 px-[60px] py-[40px]">
                                    <h5 className='text-red-700 font-bold'>NEW ARRIVALS</h5>
                                    <h2 className='text-5xl font-bold text-white leading-[60px]'>BEST PRODUCT IN <br /> BEST PRICES</h2>
                                    <button className='btn bg-white text-black'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerInfo;