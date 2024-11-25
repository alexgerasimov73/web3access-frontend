import { useQuery } from '@tanstack/react-query';
import { refreshService } from '../services/AuthService';
import { useStore } from '../store/useStore';

export const useCheckAuth = () => {
  const setUser = useStore((state) => state.setUser);

  return useQuery({
    queryKey: ['check auth'],
    queryFn: async () => {
      const response = await refreshService();
      localStorage.setItem('token', response.data.accessToken);
      setUser(response.data.user);

      return response.data.user;
    },
    enabled: !!localStorage.getItem('token'),
  });
};
