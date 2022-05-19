import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContext } from '../../App';
import { loadStripe } from '@stripe/stripe-js';
import auth from '../../firebase.init';
import Loading from '../utilities/Loading';
import NotFound from './NotFound';
import {
    Elements,
} from '@stripe/react-stripe-js';
import CheckoutFrom from '../child/CheckoutFrom';



const Payment = () => {
    const [stripePromise, setStripePromise] = useState(() => loadStripe('pk_test_51L1169ERhNvrJqfb95HV9RKyiSyhJkiwMPJYAf2sSsVKGTedSm0qr1heEwq7sYvOIaxWlI0DrmorUQzk40ekn3Nh00Cfe6cxc8'))
    const { toastConfig } = useContext(ToastContext)
    const navigate = useNavigate()
    const [invalidId, setInvalidId] = useState(false)
    const { serviceId } = useParams()
    const { data, isLoading } = useQuery(['singleService', serviceId], async () => {
        try {
            return await axios({
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
                url: `http://localhost:5000/payment?id=${serviceId}`
            })

        }
        catch (err) {
            if (err.response.status === 404) {
                setInvalidId(true)
            }
            else {
                localStorage.removeItem('access_token')
                signOut(auth)
                navigate('/')
                toast.error('Something went wrong', toastConfig)
            }
        }
    })
    const { date, email, slot, name, treatment, price, id } = data?.data || {}
    if (invalidId) {
        return <NotFound></NotFound>
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="min-h-[500px] flex items-center flex-col md:flex-row">
            <div className="w-full sm:w-4/5 md:w-1/2 text-center">
                <h1 className="text-3xl font-bold">Hello there <span className="text-projectPrimary">{name}</span></h1>
                <p className="py-4 text-2xl">You have an appointment on <span className="text-orange-500">{date}</span> at <span className="text-projectSecondary">{slot}</span> timeslot</p>
                <p className="text-2xl">Treatment : {treatment}</p>
                <p className="py-4 text-2xl">Price : {price}</p>
            </div>
            <div className="w-full sm:w-4/5 md:w-1/2">
                <Elements stripe={stripePromise}>
                    <CheckoutFrom
                        service={data?.data}
                    ></CheckoutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;