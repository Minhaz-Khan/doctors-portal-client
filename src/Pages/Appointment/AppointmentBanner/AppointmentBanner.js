import React from 'react';
import chair from '../../../assets/images/chair.png';
import bannerBg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <div className="hero " >
            <div className="hero-content flex-col flex-1 lg:flex-row-reverse py-20" style={{ backgroundImage: `url(${bannerBg})` }}>
                <img alt='' src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" />
                <div className='flex-1 flex justify-center'>
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;