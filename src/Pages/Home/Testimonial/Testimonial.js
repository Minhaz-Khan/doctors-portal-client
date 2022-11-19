import React from 'react';
import TestimonialCart from './TestimonialCart';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import quote from '../../../assets/icons/quote.svg'
const Testimonial = () => {
    const Feedback = [
        {
            id: 1,
            image: people1,
            feedback: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            address: "California"
        },
        {
            id: 2,
            image: people2,
            feedback: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            address: 'California'
        },
        {
            id: 3,
            image: people3,
            feedback: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            address: 'California'
        }
    ]
    return (
        <section className='my-20'>
            <dir className='flex justify-between mb-20 p-0'>
                <div>
                    <h4 className='text-xl'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} alt="" className='w-48' />
                </div>
            </dir>

            <div className='grid gap-x-14 gap-y-11 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {Feedback.map(feed => <TestimonialCart key={feed.id} feed={feed}></TestimonialCart>)}
            </div>
        </section>
    );
};

export default Testimonial;