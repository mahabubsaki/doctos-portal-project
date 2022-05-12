import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import axios from 'axios';
import Service from './Service';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        const getServices = async () => {
            const { data } = await axios.get('http://localhost:5000/services')
            setServices(data)
        }
        getServices()
    }, [])
    return (
        <div className="my-10">
            {date && <h1 className="text-projectSecondary text-2xl text-center">Appointment Available on {format(date, 'PP')}</h1>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto w-full sm:w-10/12 my-10">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                        date={date}
                    ></Service>)
                }
            </div>
            {(treatment && date) && <BookingModal
                treatment={treatment}
                date={date}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;