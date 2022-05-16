import React from 'react';

const TableRow = ({ no, booking }) => {
    const { treatment, slot, date, name } = booking;
    return (
        <tr>
            <th>{no}</th>
            <td>{treatment}</td>
            <td>{date}</td>
            <td>{slot}</td>
            <td>{name}</td>
        </tr>
    );
};

export default TableRow;