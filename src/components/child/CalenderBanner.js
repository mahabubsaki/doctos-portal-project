import React from 'react';
import chair from '../../assets/images/chair.png'
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import Calender from './Calender';

const CalenderBanner = ({ date, setDate }) => {
    return (
        <div className="hero min-h-screen banner">
            <div className="hero-content flex-col md:flex-row-reverse">
                <img src={chair} alt="chair" className="sm:max-w-md max-w-xs rounded-lg shadow-2xl" />
                <div className="testimonial-card">
                    <Calender data={date} setDate={setDate}></Calender>
                </div>
            </div>
        </div>
    );
};

export default CalenderBanner;