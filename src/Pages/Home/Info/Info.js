import React from 'react';
import CardInfo from './CardInfo/CardInfo';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <section className='grid md:grid-cols-3 grid-cols-1 gap-6 mb-16'>
            <CardInfo
                img={clock}
                bg={' bg-gradient-to-l from-primary to-secondary'}
                title={'Opening Hours'}
                text={'Lorem Ipsum is simply dummy text of the pri'}
            ></CardInfo>
            <CardInfo
                img={marker}
                bg={'bg-accent'}
                title={'Visit our location'}
                text={'Brooklyn, NY 10036, United States'}
            ></CardInfo>
            <CardInfo
                img={phone}
                bg={' bg-gradient-to-l from-primary to-secondary'}
                title={'Contact us now'}
                text={'+000 123 456789'}
            ></CardInfo>
        </section>
    );
};

export default Info;