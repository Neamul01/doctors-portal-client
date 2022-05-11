import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import Testimonial from './Testimonial';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';

const Testimonials = () => {
    const testimonials = [
        {
            _id: 1,
            image: people1,
            name: 'winson herry',
            address: 'california',
            describsion: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
        {
            _id: 2,
            image: people2,
            name: 'winson herry',
            address: 'california',
            describsion: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
        {
            _id: 3,
            image: people3,
            name: 'winson herry',
            address: 'california',
            describsion: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between md:px-8'>
                <div className='text-left'>
                    <h2 className='capitalize text-xl text-primary'> Testimonial</h2>
                    <h3 className="text-3xl capitalize">What Our Patients Says</h3></div>
                <div>
                    <img className='md:max-w-[192px] md:max-h-[152px] max-w-98 max-h-[76]' src={quote} alt="" />
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-14 mt-14'>
                {
                    testimonials.map(testimonial => <Testimonial key={testimonial._id} testimonial={testimonial}></Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;