import React from 'react';
import Treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../Component/PrimaryButton/PrimaryButton';

const TermsBanner = () => {
    return (
        <div className="hero my-32">
            <div className="hero-content flex-col lg:flex-row md:space-x-20">
                <img src={Treatment} className="md:max-w-lg rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental <br />
                        Care, on Your Trems</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default TermsBanner;