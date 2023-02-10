<<<<<<< HEAD
import React from 'react';
import BannerInfo from '../BannerInfo/BannerInfo';
import FlashSale from '../FlashSale/FlashSale';
=======
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
import GamesProduct from "../GamesProduct/GamesProduct";
import ReviewArea from "../ReviewArea/ReviewArea";

>>>>>>> 80455603051a55fdd25361b77334a6ff4dd60b74

const Home = () => {
    return (
        <div>
<<<<<<< HEAD
            <BannerInfo />
            <FlashSale />
=======
            <Banner></Banner>
            <BannerInfo />
            <FlashSale />
            <SmartPhoneArea />
            <OfferBanner />
            <HomeAppliances />
            <AppliancesBanner></AppliancesBanner>
            <GamesProduct />
            <ReviewArea />
            <PopularPostContainer />
            <Footer></Footer>
>>>>>>> 80455603051a55fdd25361b77334a6ff4dd60b74
        </div>
    );
};

export default Home;
