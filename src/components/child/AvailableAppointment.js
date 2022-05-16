import React, { useState } from 'react';
import { format } from 'date-fns';
import axios from 'axios';
import Service from './Service';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../utilities/Loading';

const AvailableAppointment = ({ date }) => {
    let formattedDate;
    if (date) {
        formattedDate = format(date, 'PP')
    }
    else {
        formattedDate = ''
    }
    const [treatment, setTreatment] = useState(null)
    const { data, isLoading, refetch } = useQuery(['services', formattedDate], async () => {
        return await axios.get(`http://localhost:5000/services?date=${formattedDate}`)
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="my-10">
            {date ? <h1 className="text-projectSecondary text-2xl text-center">Appointment Available on {format(date, 'PP')}</h1> : <h1 className="text-projectSecondary text-2xl text-center">Please select a date for your appointment</h1>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto w-full sm:w-10/12 my-10">
                {
                    data?.data?.map(service => <Service
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
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;