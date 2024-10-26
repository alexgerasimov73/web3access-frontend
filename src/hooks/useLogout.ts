import { useMutation } from '@tanstack/react-query';
import { useToast } from '@chakra-ui/react';
import { store } from '../store/store';
import { logoutService } from '../services/AuthService';
import { TAxiosError } from '../helpers/constants';

export const useLogout = () => {
  const toast = useToast();

  const { mutate: logout } = useMutation({
    mutationKey: ['log out'],
    mutationFn: () => logoutService(),
    onSuccess: () => {
      localStorage.removeItem('token');
      store.setUser(null);
    },
    onError: (err: TAxiosError) =>
      toast({
        title: 'Arrrrghhh!',
        description: `An error has occurred: ${err.response?.data.message}`,
        status: 'error',
      }),
  });

  return logout;
};
