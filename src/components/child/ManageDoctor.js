import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../utilities/Loading';
import TableRow3 from './TableRow3';

const ManageDoctor = () => {
    const { data, isLoading, refetch } = useQuery('docotors', async () => {
        try {
            return await axios({
                method: "get",
                url: "http://localhost:5000/all-doctor",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
        }
        catch (e) {
            console.log(e);
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <h3 className="text-xl text-center text-projectSecondary my-3">This site have currently {data?.data?.length} {data.data?.length > 0 ? "doctors" : "doctor"}</h3>
                <table className="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Avatar</th>
                            <th>Email</th>
                            <th>Speciality</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.data?.map((dct, index) => <TableRow3
                                key={index}
                                dct={dct}
                                no={index + 1}
                                refetch={refetch}
                            ></TableRow3>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;