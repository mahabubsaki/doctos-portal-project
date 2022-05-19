import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { ToastContext } from '../../App';

const Service = ({ service, setTreatment, date }) => {
    const { toastConfig } = useContext(ToastContext)
    const { name, slots, price } = service;
    const handleAppointment = (service) => {
        if (!date) {
            toast.warn('Please select an date for appointment', toastConfig);
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
            <p className="text-sm font-bold">Price: ${price}</p>
            <label htmlFor="booking-modal" className="btn text-white bg-projectSecondary border-0 my-3" onClick={() => handleAppointment(service)} disabled={!slots.length}>Book Appointment</label>
        </div>
    );
};

export default Service;