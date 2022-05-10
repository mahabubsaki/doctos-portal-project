import React from 'react';
import { useNavigate } from 'react-router-dom';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className="hero min-h-screen banner">
            <div className="hero-content flex-col md:flex-row-reverse">
                <img src={chair} alt="chair" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-6xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Best doctor In your Area. You can appoint here from anywhere anytime. Our Customer is always appreciated. Our clinic is well-known for last 3 years.</p>
                    <button className="btn bg-projectPrimary border border-projectPrimary" onClick={() => navigate('/appointment')}>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;