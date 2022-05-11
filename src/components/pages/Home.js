import React from 'react';
import Banner from '../child/Banner';
import Services from '../child/Services';
import Extra from '../child/Extra'
import HomeAppointment from '../child/HomeAppointment';
import Testimonial from '../child/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Extra></Extra>
            <HomeAppointment></HomeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;