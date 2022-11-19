import { format } from 'date-fns';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { authContext } from '../../../Context/AuthProvider';

const AppointmentModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name, slots } = treatment;
    const { user } = useContext(authContext);
    const date = format(selectedDate, "PP")
    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const Patient = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: name,
            Patient,
            slot,
            email,
            phone
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setTreatment(null)
                    Swal.fire({
                        icon: 'success',
                        title: 'Booking Confirmed',
                        showConfirmButton: false,
                        timer: 1500,
                    })
                    refetch()
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: `${data.message}`,
                        showConfirmButton: false,
                        timer: 1500,
                    })
                }

            })



    }
    return (
        <>
            <input type="checkbox" id="option-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="option-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='space-y-2'>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " defaultValue={date} disabled />
                        <select name='slot' className="select select-secondary w-full" defaultValue={slots[0]}>

                            {slots.map((slot, i) => <option key={i}>{slot}</option>)}
                        </select>
                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Full Name" className="input input-bordered w-full " />
                        <input name='email' defaultValue={user?.email} disabled type="Email" placeholder="Your Email" className="input input-bordered w-full " required />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full " />
                        <input type="submit" value="SUBMIT" className='w-full btn btn-accent' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AppointmentModal;