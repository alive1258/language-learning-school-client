import { useQuery } from '@tanstack/react-query';


const useInformation = () => {

    const { data: information = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['informations'],
        queryFn: async () => {
            const res = await fetch('https://language-learning-school-server-bay.vercel.app/informations');
            return res.json();
        }
    })

    return [information, loading, refetch]
};

export default useInformation;

