import React from 'react';

const PaymentCard = ({ payment }) => {
    const { amount, date, paymentDate, paymentId, phone, price, slot, treatment } = payment;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Payment Id : {paymentId}</p>
                <h2 className="card-title">Treatment : {treatment}</h2>
                <p>Time Slot : {slot}</p>
                <p>Contact No : {phone}</p>
                <p>Booking Date : {date}</p>
                <p>Payment Date : {paymentDate}</p>
                <p>Amount Paid : {price}</p>
                <button className="btn bg-projectSecondary border-0 block mx-auto">Join Zoom Meeting</button>
            </div>
        </div>
    );
};

export default PaymentCard;