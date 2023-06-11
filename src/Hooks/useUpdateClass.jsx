import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useUpdateClass = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?._id],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.patch(`/classes/instructor/${user?._id}`)
            console.log('is Instructor response', res)
            return res.data.instructor;

        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useUpdateClass;