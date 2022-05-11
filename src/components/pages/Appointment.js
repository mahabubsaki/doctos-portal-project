import React from 'react';
import chair from '../../assets/images/chair.png'

const Appointment = () => {
    return (
        <div className="hero min-h-screen banner">
            <div className="hero-content flex-col md:flex-row-reverse">
                <img src={chair} alt="chair" className="sm:max-w-md max-w-xs rounded-lg shadow-2xl" />
                <div>

                </div>
            </div>
        </div>
    );
};

export default Appointment;