import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCart from './InfoCart';

const InfoCarts = () => {
    const CartInfos = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            id: 2,
            name: 'Visit our Location',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-secondary to-primary'
        },
    ]
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {CartInfos.map(cartInfo => <InfoCart key={cartInfo.id} cartInfo={cartInfo}></InfoCart>)}
        </div>
    );
};

export default InfoCarts;