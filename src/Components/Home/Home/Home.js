import React from 'react';
import AppliancesBanner from '../appliancesBanner/AppliancesBanner';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div >
            <h1>This is Home</h1>

            <Banner></Banner>
            <AppliancesBanner></AppliancesBanner>
        </div>
    );
};

export default Home;