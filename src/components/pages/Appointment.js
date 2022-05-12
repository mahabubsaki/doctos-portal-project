import React, { useState } from 'react';
import AvailableAppointment from '../child/AvailableAppointment';
import CalenderBanner from '../child/CalenderBanner';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <>
            <CalenderBanner date={date} setDate={setDate}></CalenderBanner>
            <AvailableAppointment date={date}></AvailableAppointment>
        </>
    );
};

export default Appointment;