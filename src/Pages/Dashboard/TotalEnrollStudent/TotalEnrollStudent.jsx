import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const TotalEnrollStudent = () => {
    const {user}=useAuth()
    const [axiosSecure]=useAxiosSecure()

    const { data: stats = {} } = useQuery({
        queryKey: ['stats'],
        queryFn: async () => {
            const res = await axiosSecure('/stats')
            return res.data;
        }
    })

    return (
        <div className='m-40'>
            <div className='text-center bg-gray-200 py-12 w-1/2 rounded-lg text-3xl'>
            Total Enroll Students: {stats.orders}
            </div>
           
        </div>
    );
};

export default TotalEnrollStudent;