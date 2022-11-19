import React, { useEffect, useState } from 'react';
import GradientText from '../../../Component/GradientText/GradientText';
import { format } from 'date-fns';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
import { useQuery } from '@tanstack/react-query';


const AvailableAppointments = ({ selectedDate }) => {
    const date = format(selectedDate, 'PP')
    const [treatment, setTreatment] = useState(null)
    // const { data: appointmentOption = [] } = useQuery({
    //     queryKey: ['appoinmentoptions'],
    //     queryFn: () => fetch('http://localhost:5000/appoinmentoptions')
    //         .then(res => res.json())
    // })

    const { data: appointmentOption, isLoading, refetch } = useQuery({
        queryKey: ['appoinmentoptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appoinmentoptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='mt-10'>
            <GradientText classStyle={'text-xl font-bold text-center'}><p>Available Appointments on {format(selectedDate, 'PP')}</p></GradientText>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 my-24'>
                {isLoading ? <p>loading.....</p> : appointmentOption.map(service => <AppointmentOption key={service._id} AppointmentOption={service} setTreatment={setTreatment}></AppointmentOption>)}
            </div>
            {treatment && <AppointmentModal refetch={refetch} setTreatment={setTreatment} selectedDate={selectedDate} treatment={treatment}></AppointmentModal>}
        </div>
    );
};

export default AvailableAppointments;