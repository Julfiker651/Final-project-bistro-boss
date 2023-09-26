import { useQuery } from '@tanstack/react-query'
const useFoods = () => {
    const { data:foods=[],refetch} = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
          const response = await fetch('http://localhost:3000/foods')
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        },
      })
      return [foods,refetch]
};

export default useFoods;