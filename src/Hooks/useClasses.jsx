import React from 'react';
import { useQuery } from '@tanstack/react-query';

const useClasses = () => {
    const {data: allClass = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menus'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/classes');
            return res.json();
        }
    })

    return [allClass, loading, refetch]
};

export default useClasses;