import React from 'react';
import Banner from '../Banner/Banner';
import HomeContact from '../HomeContact/HomeContact';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Service from '../Service/Service/Service';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='md:mx-12 mx-4'>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <HomeContact></HomeContact>
        </div>
    );
};

export default Home;