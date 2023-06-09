import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrash, FaUserShield } from 'react-icons/fa';



const AllUsers = () => {
    const { data: users = [] } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })
    const handleDelete=(user)=>{

    }
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
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'admin' :
                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost  bg-blue-500 text-white"><FaUserShield /></button>
                                        
                                    }
                                    </td>
                             
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost  bg-red-500 text-white"><FaTrash /></button>
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