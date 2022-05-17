import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Calender = ({ date, setDate }) => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const disabledDays = [
        { from: new Date(1000, 1, 1), to: yesterday }
    ];

    return (
        <DayPicker
            dateFormat="MM-DD-YYYY"
            defaultMonth={new Date()}
            disabled={disabledDays}
            mode="single"
            selected={date}
            onSelect={setDate}
        />
    );
};

export default Calender;