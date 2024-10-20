import { useMutation } from '@tanstack/react-query';
import { verifyCustomerService } from '../../../services/RegistrationService';
import { TAxiosError } from '../../../helpers/constants';
import type { TVerifyCustomerResponse } from '../types';
import { useToast } from '@chakra-ui/react';

export const useVerifyCustomer = () => {
  const toast = useToast();

  const {
    data: freshData,
    isPending,
    mutate: verifyCustomer,
  } = useMutation({
    mutationKey: ['verify customer'],
    mutationFn: (data: TVerifyCustomerResponse) => verifyCustomerService(data),
    onSuccess: () =>
      toast({
        title: 'Perfect!',
        description: 'Your data was successfully sent',
        status: 'success',
      }),
    onError: (err: TAxiosError) =>
      toast({
        title: 'Oh no!',
        description: `An error has occured: ${err.response?.data.message}`,
        status: 'error',
      }),
  });

  return { freshData, isPending, verifyCustomer };
};
