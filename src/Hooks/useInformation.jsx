import { useQuery } from '@tanstack/react-query';


const useInformation = () => {
 
    const {data: information = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['informations'],
        queryFn: async() => {
                       const res = await fetch('http://localhost:5000/informations');
                       return res.json();
                   }
    })

    return [information, loading,refetch]
};

export default useInformation;

