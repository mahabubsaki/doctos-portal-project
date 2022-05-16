import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import Loading from '../utilities/Loading';
import TableRow from './TableRow';

const MyAppointments = () => {
    const [myBookings, setMyBookings] = useState([])
    const [user, loading] = useAuthState(auth);
    const { data, isLoading, refetch } = useQuery(['my-bookings', user.email], async () => {
        return await axios.get(`http://localhost:5000/bookings?email=${user.email}`)
    })
    if (isLoading || loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <h3 className="text-xl text-center text-projectSecondary my-3">You have currently {data.data.length} {data.data.length > 0 ? "bookings" : "booking"}</h3>
                <table className="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Patient</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.data?.map((booking, index) => <TableRow
                                key={index}
                                booking={booking}
                                no={index + 1}
                            ></TableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;