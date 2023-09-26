import { useQuery } from '@tanstack/react-query'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './useFirebase';



const useadmin = () => {
  const [user, loading] = useAuthState(auth)
  const {data:admin=[],refetch} = useQuery({
    queryKey: ['admin', user?.email],
    queryFn: async () => {
      const response = await fetch(user && `http://localhost:3000/users/admin/${user?.email}`,
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

  return [admin, refetch]
};

export default useadmin;