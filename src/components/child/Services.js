import React from 'react';
import flouride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {
    const serviceCard = {
        background: "#FFFFFF",
        boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)",
        borderRadius: "18px",
        padding: "40px 50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
    return (
        <div className="text-center mt-32">
            <h1 className="text-2xl text-projectPrimary">Our Services</h1>
            <h1 className="text-4xl text-projectNeutral mb-12">Services We Provide</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto text-projectNeutral" style={{ width: '96%' }}>
                <div style={serviceCard} className="w-3/4 sm:w-full mx-auto">
                    <img src={flouride} alt="" className='mb-8' />
                    <h1 className="text-xl mb-3">Flouride Treatment</h1>
                    <p>Our flouride treatment is very effective for whose teeth are week and about to break some part.</p>
                </div>
                <div style={serviceCard} className="w-3/4 sm:w-full mx-auto">
                    <img src={cavity} alt="" className='mb-8' />
                    <h1 className="text-xl mb-3">Cavity Filling</h1>
                    <p>People who have so much cavity on their teeth can come to us because we have some advance treatment for them.</p>
                </div>
                <div style={serviceCard} className="w-3/4 sm:w-full mx-auto">
                    <img src={whitening} alt="" className='mb-8' />
                    <h1 className="text-xl mb-3">Teeth Whitening</h1>
                    <p>White teeths are not always strong. Research says yellowish teeth are usually healthy. But we can also make your teeth white.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;