import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrash, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';



const AllUsers = () => {
    const [axiosSecure]=useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    const handleMakeInstructor = (user) => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    // const handleDelete=(user)=>{

    // }
    return (
        <div className='w-11/12 pb-4 p-8 shadow-xl'>
            <Helmet>
                <title>Language Learning School | All Users</title>
            </Helmet>
            <div className='h-24 uppercase'>

                Total Users: {users.length}
            </div>

            <div className="overflow-y-auto overflow-x-auto scroll-smooth w-11/12 h-[500px]">
                <table className="table w-full">
                    {/* head */}
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'admin' :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost  bg-blue-500 text-white"><FaUserShield /></button>

                                    }

                                </td>

                                <td>
                                    {
                                        user.role === 'instructor' ? 'instructor' :
                                            <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost ml-4 bg-blue-500 text-white"><FaUserShield /></button>

                                    }


                                    {/* <button onClick={() => handleDelete(user)} className="btn btn-ghost  bg-red-500 text-white"><FaTrash /></button> */}
                                </td>

                            </tr>)
                        }



                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default AllUsers;