import React from 'react';
import Appointment from '../Appointment/Appointment';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';
import TermsBanner from '../TermsBanner/TermsBanner';
import Testimonial from '../Testimonial/Testimonial';
import TopBanner from '../topBanner/TopBanner';


const Home = () => {
    return (
        <div className='mx-5'>
            <TopBanner></TopBanner>
            <Services></Services>
            <TermsBanner></TermsBanner>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;