import { useQuery } from '@tanstack/react-query';
import { getSettingsSevice } from '../services/UserService';
import { useStore } from '../store/useStore';

export const useGetSettings = () => {
  const setSettings = useStore((state) => state.setSettings);

  return useQuery({
    queryKey: ['get settings'],
    queryFn: async () => {
      const response = await getSettingsSevice();
      setSettings(response.data);

      return response.data;
    },
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: Infinity,
  });
};
