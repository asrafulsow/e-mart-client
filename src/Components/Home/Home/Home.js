import React from 'react';
import Banner from '../Banner/Banner';
import PopularPostContainer from '../MostPopularBlog/PopularPostContainer';

const Home = () => {
    return (
        <div>
            <h1>This is Home</h1>

            <Banner></Banner>
            <PopularPostContainer/>
        </div>
    );
};

export default Home;