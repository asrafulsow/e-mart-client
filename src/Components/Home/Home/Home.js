import React from 'react';
import OfferBanner from '../../Shared/OfferBanner/OfferBanner';
import Banner from '../Banner/Banner';
import BannerInfo from '../BannerInfo/BannerInfo';
import FlashSale from '../FlashSale/FlashSale';
import HomeAppliances from '../HomeAppliances/HomeAppliances';
import SmartPhoneArea from '../SmartPhoneArea/SmartPhoneArea';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerInfo />
            <FlashSale />
            <SmartPhoneArea />
            <OfferBanner />
            <HomeAppliances />
        </div>
    );
};

export default Home;