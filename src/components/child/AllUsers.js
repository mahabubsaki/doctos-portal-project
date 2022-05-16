import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../utilities/Loading';
import TableRow2 from './TableRow2';

const AllUsers = () => {
    const { data, isLoading, refetch } = useQuery('users', async () => {
        return await axios.post('http://localhost:5000/all-users', '', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        }
        )
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(data?.data);
    return (
        <div>
            <h1 className="text-projectSecondary text-center text-2xl">Total {data?.data?.length} users in this site</h1>
            <table className="table table-zebra w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Last Login</th>
                        {/* <th>Patient</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.data?.map((user, index) => <TableRow2
                            key={index}
                            user={user}
                            no={index + 1}
                        ></TableRow2>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;