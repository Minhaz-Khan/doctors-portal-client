import React from 'react';
import chair from '../../../assets/images/chair.png';
import bannerBg from '../../../assets/images/bg.png';
import InfoCarts from '../InfoCarts/InfoCarts';
import PrimaryButton from '../../../Component/PrimaryButton/PrimaryButton';

const TopBanner = () => {
    return (
        <div>
            <div className="hero " >
                <div className="hero-content flex-col lg:flex-row-reverse py-20" style={{ backgroundImage: `url(${bannerBg})` }}>
                    <img alt='' src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>GET STARTED</PrimaryButton>
                    </div>
                </div>
            </div>
            <InfoCarts></InfoCarts>
        </div>

    )
};

export default TopBanner;
