import React from 'react';
import ServiceBanner from '../ServiceBanner/ServiceBanner';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
    return (
        <div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8 md:mx-20 mx-4'>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
            </div>
            <ServiceBanner></ServiceBanner>
        </div>
    );
};

export default Service;