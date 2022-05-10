import React from 'react';
import Banner from '../child/Banner';
import Services from '../child/Services';
import Extra from '../child/Extra'
import HomeAppointment from '../child/HomeAppointment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Extra></Extra>
            <HomeAppointment></HomeAppointment>
        </div>
    );
};

export default Home;