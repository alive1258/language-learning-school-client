import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import { Helmet } from 'react-helmet-async';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import EasyLearn from '../EasyLearn/EasyLearn';
import ContactUs from '../ContactUs/ContactUs';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Language Learning School | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <EasyLearn></EasyLearn>
            <ContactUs></ContactUs>
          
        </div>
    );
};

export default Home;