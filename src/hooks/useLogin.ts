import { useMutation } from '@tanstack/react-query';
import { useToast } from '@chakra-ui/react';
import { store } from '../store/store';
import { ILoginResponse, TAxiosError } from '../helpers/constants';
import { loginService } from '../services/AuthService';

export const useLogin = () => {
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
      store.setUser(response.data.user);
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
