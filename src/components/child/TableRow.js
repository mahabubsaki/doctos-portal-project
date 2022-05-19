import React from 'react';
import { useNavigate } from 'react-router-dom';

const TableRow = ({ no, booking }) => {
    const navigate = useNavigate()
    const { treatment, slot, date, paymentId, price, id } = booking;
    return (
        <tr>
            <th>{no}</th>
            <td>{treatment}</td>
            <td>{date}</td>
            <td>{slot}</td>
            <td>{price}</td>
            <td>
                {paymentId ?
                    <>
                        <p className="text-green-500 text-center">Paid</p>
                        <button className="btn bg-projectSecondary border-0 block mx-auto">Join Zoom Meeting</button>
                    </>
                    :
                    <>
                        <p className="text-red-500 text-center">Not Paid</p>
                        <button className="btn bg-projectPrimary border-0 block mx-auto" onClick={() => navigate(`/payment/${id}`)}>Pay Now</button>
                    </>
                }
            </td>
        </tr>
    );
};

export default TableRow;