import React from 'react';
import Banner from '../Banner/Banner';
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
        </div>
    );
};

export default Home;