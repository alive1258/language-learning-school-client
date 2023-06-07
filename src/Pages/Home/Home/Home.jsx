import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import { Helmet } from 'react-helmet-async';
// import { Helmet } from 'react-helmet';
// import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Language Learning School | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
        </div>
    );
};

export default Home;