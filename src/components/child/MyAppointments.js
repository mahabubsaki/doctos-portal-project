import axios from 'axios';
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import Loading from '../utilities/Loading';
import TableRow from './TableRow';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { ToastContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const MyAppointments = () => {
    const { toastConfig } = useContext(ToastContext)
    const navigate = useNavigate()
    const [user, loading] = useAuthState(auth);
    const { data, isLoading } = useQuery(['my-bookings', user.email], async () => {
        try {
            return await axios.post(`http://localhost:5000/my-bookings?email=${user.email}`, { email: user.email }, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
        }
        catch (error) {
            localStorage.removeItem('access_token')
            signOut(auth)
            navigate('/')
            toast.error('Something went wrong', toastConfig)
        }
    })
    if (isLoading || loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <h3 className="text-xl text-center text-projectSecondary my-3">You have currently {data?.data?.length} {data?.data?.length > 0 ? "bookings" : "booking"}</h3>
                <table className="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Price</th>
                            <th className="text-center">Status</th>
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