import React from 'react';
import { format } from 'date-fns';

const AvailableAppointment = ({ date }) => {
    return (
        <div className="my-10">
            {date && <h1 className="text-projectSecondary text-2xl text-center">Appointment Available on {format(date, 'PP')}</h1>}
        </div>
    );
};

export default AvailableAppointment;