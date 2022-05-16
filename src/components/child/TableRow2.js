import axios from 'axios';
import React, { useContext } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { ToastContext } from '../../App';
const TableRow2 = ({ user, no, initialUser, refetch }) => {
    const { email, name, lastLogin, role } = user;
    const { toastConfig } = useContext(ToastContext)
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
                const makingAdmin = async () => {
                    try {
                        const { data } = await axios.put(`http://localhost:5000/makeAdmin?email=${email}&role=Admin`, { email }, {
                            headers: {
                                authorization: `Bearer ${localStorage.getItem('access_token')}`
                            }
                        })
                        if (data.acknowledged) {
                            toast.success('Changed this user role to admin successfully', toastConfig)
                            refetch()
                        }
                        else {
                            toast.error('Something went wrong, please try again', toastConfig)
                        }
                    }
                    catch (err) {
                        toast.error("You don't have permission to change  user role", toastConfig)
                    }
                }
                makingAdmin()
            }
        });
    }
    const handleMakeMember = (email) => {
        Swal.fire({
            text: 'Are you sure that you want to make this user a member?',
            icon: 'question',
            title: 'Make Member',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.value) {
                const makingMember = async () => {
                    try {
                        const { data } = await axios.put(`http://localhost:5000/makeAdmin?email=${email}&role=Member`, { email }, {
                            headers: {
                                authorization: `Bearer ${localStorage.getItem('access_token')}`
                            }
                        })
                        if (data.acknowledged) {
                            toast.success('Changed this user role to member successfully', toastConfig)
                            refetch()
                        }
                        else {
                            toast.error('Something went wrong, please try again', toastConfig)
                        }
                    }
                    catch (err) {
                        toast.error("You don't have permission to change user role", toastConfig)
                    }
                }
                makingMember()
            }
        });
    }
    const handleUserDelete = (email) => {
        Swal.fire({
            text: 'Are you sure that you want to delete this user?',
            icon: 'error',
            title: 'Delete User',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.value) {
                const deletingUser = async () => {
                    try {
                        const { data } = await axios.put(`http://localhost:5000/deleteUser?email=${email}`, { email }, {
                            headers: {
                                authorization: `Bearer ${localStorage.getItem('access_token')}`
                            }
                        })
                        if (data.acknowledged) {
                            toast.success(`Successfully deleted user ${email}`)
                            refetch()
                        }
                        else {
                            toast.error(`Failed to delete, please try again later`)
                        }
                    }
                    catch (err) {
                        toast.error("You don't have permission to delete user", toastConfig)
                    }
                }
                deletingUser()
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
                            {role === "Admin" ? <li onClick={() => handleMakeMember(email)}><span>Make Member</span></li> : <li onClick={() => handleMakeAdmin(email)}><span>Make Admin</span></li>}
                            <li onClick={() => handleUserDelete(email)}><span>Delete User</span></li>
                        </ul>
                    </div>
                </td>}
        </tr>
    );
};
export default TableRow2;