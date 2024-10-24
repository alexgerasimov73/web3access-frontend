import { useMutation } from '@tanstack/react-query';
import { verifyEmailService } from '../../../services/RegistrationService';
import { TAxiosError } from '../../../helpers/constants';
import type { IRegistrationResponse, TBaseRegistrationResponse } from '../types';
import { useToast } from '@chakra-ui/react';

export const useVerifyEmail = (refreshData: (data: IRegistrationResponse) => void) => {
  const toast = useToast();

  const { isPending, mutate: verifyEmail } = useMutation({
    mutationKey: ['verify email'],
    mutationFn: async (data: TBaseRegistrationResponse) => await verifyEmailService(data),
    onSuccess: (response) => {
      toast({
        title: 'Awesome!',
        description: 'Your verification code was successfully sent',
        status: 'success',
      });
      refreshData(response.data);
    },
    onError: (err: TAxiosError) => {
      console.log('error', err);
      toast({
        title: 'Oh no!',
        description: `An error has occurred: ${err.response?.data.message}`,
        status: 'error',
      });
    },
  });

  return { isPending, verifyEmail };
};
