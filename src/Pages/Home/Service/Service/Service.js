import React from 'react';
import ServiceBanner from '../ServiceBanner/ServiceBanner';
import ServiceCard from '../ServiceCard/ServiceCard';
import caviry from '../../../../assets/images/cavity.png';
import flourida from '../../../../assets/images/fluoride.png';
import whitening from '../../../../assets/images/whitening.png';

const Service = () => {
    return (
        <div className=' md:mx-20 mx-4 mt-12'>
            {/* service card area  */}
            <div >
                <p className='uppercase text-primary'>OUR SERVICES</p>
                <h2 className="text-3xl font-normal mb-16">Services We Provide</h2>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                    <ServiceCard
                        img={flourida}
                        title={'Fluoride Treatment'}
                        text={'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'}
                    ></ServiceCard>
                    <ServiceCard
                        img={caviry}
                        title={'Cavity Filling'}
                        text={'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'}
                    ></ServiceCard>
                    <ServiceCard
                        img={whitening}
                        title={'Teeth Whitening'}
                        text={'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'}
                    ></ServiceCard>
                </div>
            </div>

            {/* service banner area  */}
            <div className='md:mt-10 mt-6 md:px-20 '>
                <ServiceBanner></ServiceBanner>
            </div>
        </div>
    );
};

export default Service;