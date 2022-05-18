import axios from 'axios';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const TableRow3 = ({ no, dct, refetch }) => {
    const { doctor, img, email, phone, speciality } = dct
    const handleDoctorDelete = async (email) => {
        Swal.fire({
            text: 'Are you sure that you want to delete this doctor?',
            icon: 'error',
            title: 'Delete Doctor',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then((result) => {
            const deleteDoctor = async () => {
                if (result.value) {
                    try {
                        const { data } = await axios({
                            method: "delete",
                            url: `http://localhost:5000/delete-doctor?email=${email}`,
                            headers: {
                                authorization: `Bearer ${localStorage.getItem('access_token')}`,
                            },
                        })
                    }
                    catch (err) {
                        toast.error("You don't have permission to delete a doctor")
                    }
                }
            }
            deleteDoctor()
        })
    }
    return (
        <tr>
            <th>{no}</th>
            <td>{doctor}</td>
            <td>
                <div className="avatar">
                    <div className="w-14 rounded-full">
                        <img src={img} alt="avatar" />
                    </div>
                </div>
            </td>
            <td>{email}</td>
            <td>{speciality}</td>
            <td>{phone}</td>
            <td>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn m-1"><BsThreeDotsVertical></BsThreeDotsVertical></label>
                    <ul tabIndex="0" className="dropdown-content menu p-1 bg-white shadow rounded-box">
                        <li onClick={() => handleDoctorDelete(email)}><span>Delete</span></li>
                    </ul>
                </div>
            </td>
        </tr>
    );
};

export default TableRow3;