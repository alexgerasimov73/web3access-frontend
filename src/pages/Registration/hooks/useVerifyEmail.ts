import { useMutation } from '@tanstack/react-query';
import { verifyEmailService } from '../../../services/RegistrationService';
import { TAxiosError } from '../../../helpers/constants';
import type { TBaseRegistrationResponse } from '../types';
import { useToast } from '@chakra-ui/react';

export const useVerifyEmail = () => {
  const toast = useToast();

  const {
    data: freshData,
    isPending,
    mutate: verifyEmail,
  } = useMutation({
    mutationKey: ['verify email'],
    mutationFn: async (data: TBaseRegistrationResponse) => await verifyEmailService(data),
    onSuccess: () =>
      toast({
        title: 'Awesome!',
        description: 'Your verification code was successfully sent',
        status: 'success',
      }),
    onError: (err: TAxiosError) => {
      console.log('error', err);
      toast({
        title: 'Oh no!',
        description: `An error has occured: ${err.response?.data.message}`,
        status: 'error',
      });
    },
  });

  return { freshData, isPending, verifyEmail };
};
