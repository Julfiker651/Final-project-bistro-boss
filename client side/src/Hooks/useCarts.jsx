import { useQuery } from '@tanstack/react-query'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './useFirebase';
import GridLoader from "react-spinners/GridLoader";

const useCarts = () => {
  const [user, loading] = useAuthState(auth)
  const { isLoading, data: cart = [], refetch, isError, error } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
      // wait user for fetch the data 
      if (loading) {
        return (
          <div className='relative flex z-[60] bg-[#2a333c99] justify-center h-screen w-screen items-center'>
            <GridLoader color="#0fefc2" size={27} />
          </div>
        )
      }
      // const dd = 
      const response = await fetch(`${user?.email}` ? `http://localhost:3000/carts?email=${user?.email}`:null,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          }
        })


      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    }
  })

  return [cart, refetch, isLoading]
};

export default useCarts;