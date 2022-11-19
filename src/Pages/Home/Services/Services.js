import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png';
import ServiceCart from './ServiceCart';


const Services = () => {
    const servicesInfo = [
        {
            id: 1,
            image: fluoride,
            name: 'Fluoride Treatment',
            Details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 2,
            image: cavity,
            name: 'Cavity Filling',
            Details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 3,
            image: whitening,
            name: 'Teeth Whitening',
            Details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]
    return (
        <div className='mt-32'>
            <h4 className='text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-secondary to-primary'>OUR SERVICES</h4>
            <h3 className='text-center text-4xl'>Services We Provide</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                {servicesInfo.map(service => <ServiceCart key={service.id} service={service}></ServiceCart>)}
            </div>
        </div>
    );
};

export default Services;