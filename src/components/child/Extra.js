import React from 'react';
import { useNavigate } from 'react-router-dom';
import treatment from '../../assets/images/treatment.png'

const Extra = () => {
    const navigate = useNavigate()
    return (
        <div className="hero mt-40 w-11/12 mx-auto">
            <div className="hero-content flex-col md:flex-row">
                <img src={treatment} className="sm:max-w-md max-w-xs rounded-lg shadow-2xl w-full sm:w-3/5 text-center" alt="feature" />
                <div className="w-4/5 mx-auto">
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">You can completely relay on us. We are servicing in this category for last 3 years and never got any complain. We always care about our beloved customer</p>
                    <button className="btn bg-projectPrimary border-projectPrimary" onClick={() => navigate('/appointment')}>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Extra;