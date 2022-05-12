import React from 'react';
import chair from '../../assets/images/chair.png'
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';

const CalenderBanner = ({ date, setDate }) => {
    return (
        <div className="hero min-h-screen banner">
            <div className="hero-content flex-col md:flex-row-reverse">
                <img src={chair} alt="chair" className="sm:max-w-md max-w-xs rounded-lg shadow-2xl" />
                <div className="testimonial-card">
                    <DayPicker
                        dateFormat="MM-DD-YYYY"
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default CalenderBanner;