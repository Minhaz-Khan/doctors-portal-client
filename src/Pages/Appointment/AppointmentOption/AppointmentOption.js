import React from 'react';
import GradientText from '../../../Component/GradientText/GradientText';

const AppointmentOption = ({ AppointmentOption, setTreatment }) => {
    const { name, slots } = AppointmentOption;
    return (
        <div className="card  shadow-xl">

            <div className="card-body items-center text-center">
                <GradientText classStyle={'font-bold text-xl'}>{name}</GradientText>
                <p>{slots.length > 0 ? slots[0] : 'try another day'}</p>
                <p>{slots.length}{slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                <div className="card-actions">
                    <label htmlFor="option-modal" disabled={slots.length === 0 ? 'true' : ''} className="btn text-white bg-gradient-to-r from-secondary to-primary border-none" onClick={() => setTreatment(AppointmentOption)}>Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;