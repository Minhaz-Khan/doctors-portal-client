import React from 'react';


const TestimonialCart = ({ feed }) => {
    const { name, adress, feedback, image } = feed
    return (
        <div className='shadow-lg p-7 rounded-xl'>
            <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            <div className='flex items-center mt-5 space-x-3'>
                <img src={image} alt="" className='ring-2 ring-primary border-2 rounded-full w-16' />
                <div>
                    <h3 className='text-xl font-semibold'>Winson Herry</h3>
                    <h4>California</h4>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCart;