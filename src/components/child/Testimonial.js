import React from 'react';
import quote from '../../assets/icons/quote.svg'
import patient1 from '../../assets/images/people1.png'
import patient2 from '../../assets/images/people2.png'
import patient3 from '../../assets/images/people3.png'

const Testimonial = () => {
    return (
        <div className="mt-20 mx-8">
            <div className="mb-20 flex justify-between items-center">
                <div>
                    <h1 className="text-projectSecondary text-xl font-bold mb-2">Testimonial</h1>
                    <h1 className="text-4xl">What Our Patient Says</h1>
                </div>
                <div>
                    <img src={quote} alt="" className="h-24 md:h-48" />
                </div>
            </div>
            <div className="mx-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
                <div className="p-10 testimonial-card mb-4 sm:mb-2 md:mb-0">
                    <p className="mb-10">It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex items-center'>
                        <img src={patient1} alt="" className='border-4 border-projectSecondary rounded-full mr-1 p-1' style={{ height: "80px" }} />
                        <div className='ml-1'>
                            <h1 className="text-xl font-semibold">William Henry</h1>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                <div className="p-10 testimonial-card mb-4 sm:mb-2 md:mb-0">
                    <p className="mb-10">It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex items-center'>
                        <img src={patient2} alt="" className='border-4 border-projectSecondary rounded-full mr-1 p-1' style={{ height: "80px" }} />
                        <div className='ml-1'>
                            <h1 className="text-xl font-semibold">Jenneifer Olsen</h1>
                            <p>North Dakota</p>
                        </div>
                    </div>
                </div>
                <div className="p-10 testimonial-card mb-4 sm:mb-2 md:mb-0">
                    <p className="mb-10">It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex items-center'>
                        <img src={patient3} alt="" className='border-4 border-projectSecondary rounded-full mr-1 p-1' style={{ height: "80px" }} />
                        <div className='ml-1'>
                            <h1 className="text-xl font-semibold">Tylor Jones</h1>
                            <p>San Francisco</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;