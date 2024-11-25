import { useMutation } from '@tanstack/react-query';
import { useToast } from '@chakra-ui/react';
import { loginService } from '../services/AuthService';
import { useStore } from '../store/useStore';
import { ILoginResponse, TAxiosError } from '../helpers/types';

export const useLogin = () => {
  const setUser = useStore((state) => state.setUser);
  const toast = useToast();

  const { mutate: login } = useMutation({
    mutationKey: ['log in'],
    mutationFn: (data: ILoginResponse) => loginService(data),
    onSuccess: (response) => {
      toast({
        title: 'Brilliantly!',
        description: 'You successfully logged in',
        status: 'success',
      });
      localStorage.setItem('token', response.data.accessToken);
      setUser(response.data.user);
    },
    onError: (err: TAxiosError) =>
      toast({
        title: 'Oh no!',
        description: `An error has occurred: ${err.response?.data.message}`,
        status: 'error',
      }),
  });

  return login;
};
