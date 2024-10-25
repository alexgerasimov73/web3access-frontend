import { useQuery } from '@tanstack/react-query';
import { refreshService } from '../services/AuthService';
import { store } from '../store/store';

export const useCheckAuth = () =>
  useQuery({
    queryKey: ['check auth'],
    queryFn: async () => {
      const response = await refreshService();
      localStorage.setItem('token', response.data.accessToken);
      store.setUser(response.data.user);
    },
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: Infinity,
  });
