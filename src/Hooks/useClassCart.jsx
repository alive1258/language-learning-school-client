import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useClassCart = () => {
    const { user, loading } = useAuth();

    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
  

        queryFn: async () => {
            if (user?.email) {
                const res = await axiosSecure(`/carts?email=${user?.email}`)
                // console.log('res from axios', res)
                return res.data;
            }

        },
    })
    return [cart, refetch]
};

export default useClassCart;