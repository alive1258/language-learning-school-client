import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useUsers = () => {
    const { data: users = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://language-learning-school-server-bay.vercel.app/users');
            return res.json();
        }
    })

    return [users, loading, refetch]
};

export default useUsers;