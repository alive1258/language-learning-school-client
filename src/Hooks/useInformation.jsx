// import React from 'react';
// import { useQuery } from '@tanstack/react-query';

// const useClasses = () => {
//     const {data: allClass = [], isLoading: loading, refetch} = useQuery({
//         queryKey: ['menus'],
//         queryFn: async() => {
//             const res = await fetch('http://localhost:5000/classes');
//             return res.json();
//         }
//     })

//     return [allClass, loading, refetch]
// };

// export default useClasses;
import React, { useEffect, useState } from 'react';



const useInformation = () => {
    const [information, setInformation] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/informations')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setInformation(data)
            })
    }, [])

    return [information, loading]
};

export default useInformation;

