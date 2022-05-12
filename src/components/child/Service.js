import React from 'react';
import { toast } from 'react-toastify';

const Service = ({ service, setTreatment, date }) => {
    const { name, slots } = service;
    const handleAppointment = (service) => {
        if (!date) {
            toast.warn('Please select an date for appointment', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        setTreatment(service)
    }
    return (
        <div className="testimonial-card flex flex-col justify-center items-center">
            <h1 className='text-2xl text-projectSecondary'>{name}</h1>
            {slots.length > 0 &&
                <p className='text-sm my-3'>{slots[0]}</p>
            }
            {slots.length === 0 &&
                <p className='text-red-500 text-sm'>All slots are filled</p>
            }
            <p className="text-sm">{slots.length} {slots.length ? "spaces" : "space"} Available</p>
            <label htmlFor="booking-modal" className="btn text-white bg-projectSecondary border-0 my-3" onClick={() => handleAppointment(service)} disabled={!slots.length}>Book Appointment</label>
        </div>
    );
};

export default Service;