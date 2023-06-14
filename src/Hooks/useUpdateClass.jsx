import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUpdateClass = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.patch(`/classes/instructor/${user?.email}`)
            console.log('is Instructor response', res)
            return res.data.instructor;

        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useUpdateClass;