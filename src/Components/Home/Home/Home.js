import React from "react";
import Footer from "../../Shared/Footer/Footer";
import AppliancesBanner from '../appliancesBanner/AppliancesBanner';
import OfferBanner from '../../Shared/OfferBanner/OfferBanner';
import Banner from '../Banner/Banner';
import PopularPostContainer from '../MostPopularBlog/PopularPostContainer';
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
            <AppliancesBanner></AppliancesBanner>
            <PopularPostContainer/>
            <Footer></Footer>
        </div>
    );
};

export default Home;
