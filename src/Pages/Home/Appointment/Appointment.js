import React from 'react';
import smallDoctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Component/PrimaryButton/PrimaryButton';
const Appointment = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${appointment})` }}>
            <div className="hero-content flex-col lg:flex-row m-0">
                <img src={smallDoctor} className="max-w-lg hidden md:block -mt-24  rounded-lg shadow-2xl" alt='' />
                <div className='text-white'>
                    <h3 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-secondary to-primary'>Appointment</h3>
                    <h1 className="text-3xl font-semibold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Appointment;