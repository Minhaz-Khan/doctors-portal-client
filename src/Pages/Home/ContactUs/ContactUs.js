import React from 'react';
import ContactBg from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Component/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <div style={{ backgroundImage: `url(${ContactBg})` }} className='py-16'>
            <div className="card flex-shrink-0 w-full max-w-sm   mx-auto" >
                <h3 className='text-xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-b from-secondary to-primary'>Contact Us</h3>
                <h2 className='text-3xl text-center text-white'>Stay connected with us</h2>
                <div className="card-body">
                    <div className="form-control">
                        <input type="text" placeholder="Email Address" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Subject" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <textarea name="" placeholder='Your message' cols="10" rows="4" className='rounded-md p-3 outline-none '></textarea>
                    </div>
                    <div className="form-control mt-6 w-24 mx-auto">
                        <PrimaryButton >Submit</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;