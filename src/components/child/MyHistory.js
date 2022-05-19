import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContext } from '../../App';
import auth from '../../firebase.init';
import Loading from '../utilities/Loading';
import PaymentCard from './PaymentCard';

const MyHistory = () => {
    const navigate = useNavigate()
    const [user, loading] = useAuthState(auth);
    const { toastConfig } = useContext(ToastContext)
    const { data, isLoading } = useQuery(['payments', user.email], async () => {
        try {
            return await axios({
                method: 'GET',
                url: `http://localhost:5000/paid-bookings?email=${user?.email}`,
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access_token')}`,
                }
            })
        }
        catch (err) {
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
            <h1 className="text-3xl text-center">Currently you have {data?.data?.length} completed payment</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-5/6 mx-auto sm:w-auto py-4">
                {
                    data?.data?.map(payment => <PaymentCard
                        key={payment._id}
                        payment={payment}
                    ></PaymentCard>)
                }
            </div>
        </div>
    );
};

export default MyHistory;