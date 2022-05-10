import React from 'react';
import { useNavigate } from 'react-router-dom';
import chair from '../../assets/images/chair.png'
import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Banner = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="hero min-h-screen banner">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <img src={chair} alt="chair" className="sm:max-w-md max-w-xs rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Best doctor In your Area. You can appoint here from anywhere anytime. Our Customer is always appreciated. Our clinic is well-known for last 3 years.</p>
                        <button className="btn bg-projectPrimary border border-projectPrimary" onClick={() => navigate('/appointment')}>Get Started</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto text-white" style={{ width: '96%' }}>
                <div className="bg-projectPrimary rounded-2xl flex items-center flex-col py-4 px-0 sm:flex-row sm:py-0 sm:px-4 text-center w-3/4 sm:w-full mx-auto">
                    <div>
                        <img src={clock} alt="" />
                    </div>
                    <div className="ml-6">
                        <h1 className="text-2xl my-4">Opening Hours</h1>
                        <p>Our clinic opens 8 am every day and closed at 10 pm</p>
                    </div>
                </div>
                <div className="bg-projectAccent rounded-2xl flex items-center flex-col py-4 px-0 sm:flex-row sm:py-6 sm:px-4 text-center w-3/4 sm:w-full mx-auto">
                    <div>
                        <img src={location} alt="" />
                    </div>
                    <div className="ml-6">
                        <h1 className="text-2xl my-4">Visit Location</h1>
                        <p>Hazi Nowab Ali Rd, Boro Dewra, Tongi, Gazipur-1711</p>
                    </div>
                </div>
                <div className="bg-projectPrimary rounded-2xl flex items-center flex-col py-4 px-0 sm:flex-row sm:py-6 sm:px-4 text-center w-3/4 sm:w-full mx-auto">
                    <div>
                        <img src={phone} alt="" />
                    </div>
                    <div className="ml-6">
                        <h1 className="text-2xl my-4">Contact Us</h1>
                        <p>+9901825370711</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;