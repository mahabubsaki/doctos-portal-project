import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
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
            <button className="btn text-white bg-projectSecondary border-0 my-3">Book Appointment</button>
        </div>
    );
};

export default Service;