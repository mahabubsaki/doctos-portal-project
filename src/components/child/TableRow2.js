import React from 'react';

const TableRow2 = ({ user, no }) => {
    const { email, name, lastLogin } = user;
    return (
        <tr>
            <th>{no}</th>
            <td>{email}</td>
            <td>{name}</td>
            <td>{lastLogin}</td>
            {/* <td>{name}</td> */}
        </tr>
    );
};
export default TableRow2;