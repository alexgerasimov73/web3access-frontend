import { useQuery } from '@tanstack/react-query';
import { getSettingsSevice } from '../services/UserService';
import { store } from '../store/store';

export const useGetSettings = () =>
  useQuery({
    queryKey: ['get settings'],
    queryFn: async () => {
      const response = await getSettingsSevice();
      store.setSettings(response.data);

      return response.data;
    },
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: Infinity,
  });
