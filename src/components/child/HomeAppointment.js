import React from 'react';
import doctor from '../../assets/images/doctor.png'

const HomeAppointment = () => {
    return (
        <div className="hero mt-40 home-appointment" style={{ padding: "0" }}>
            <div className="home-appointment-img flex-col md:flex-row items-center">
                <img src={doctor} className="w-2/4 text-center mt-[-100px] hidden md:block" alt="doctor" />
                <div className="w-2/4 py-4">
                    <h1 className="text-xl text-projectPrimary font-bold">Appointment</h1>
                    <h1 className="py-5 text-3xl text-white">Make an appointment Today!</h1>
                    <p className="pb-5 text-white">It's high time for you to come to us appoint. Because we have so much busy shedules for next 1 month. We always encourge our patient to the best and possible guide. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, reiciendis nostrum veritatis vel cupiditate blanditiis. Quis sint dolore cum fuga quo itaque illum.</p>
                    <button className="btn bg-projectPrimary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomeAppointment;