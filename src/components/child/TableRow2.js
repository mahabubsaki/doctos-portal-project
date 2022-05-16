import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs'
import Swal from 'sweetalert2';
const TableRow2 = ({ user, no, initialUser }) => {
    const { email, name, lastLogin, role } = user;
    const handleMakeAdmin = (email) => {
        Swal.fire({
            text: 'Are you sure that you want to make this user an admin?',
            icon: 'question',
            title: 'Make Admin',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.value) {
                alert(`Making ${email} admin`)
            }
        });
    }
    const handleUserDelete = (email) => {
        Swal.fire({
            text: 'Are you sure that you want to delete this user?',
            icon: 'error',
            title: 'Delete',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.value) {
                alert(`Making ${email} admin`)
            }
        });
    }
    return (
        <tr>
            <th>{no}</th>
            <td>{email}</td>
            <td>{name}</td>
            <td>{lastLogin}</td>
            <td>{role ? role : 'Member'}</td>
            {(initialUser.email !== email) &&
                <td>
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn m-1"><BsThreeDotsVertical></BsThreeDotsVertical></label>
                        <ul tabIndex="0" className="dropdown-content menu p-1 bg-white shadow rounded-box">
                            <li onClick={() => handleMakeAdmin(email)}><span>Make Admin</span></li>
                            <li onClick={() => handleUserDelete(email)}><span>Delete User</span></li>
                        </ul>
                    </div>
                </td>}
        </tr>
    );
};
export default TableRow2;