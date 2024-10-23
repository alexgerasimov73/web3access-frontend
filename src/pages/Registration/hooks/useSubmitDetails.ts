import { useMutation } from '@tanstack/react-query';
import { submitDetailsService } from '../../../services/RegistrationService';
import { TAxiosError } from '../../../helpers/constants';
import type { TSubmitDetailsResponse } from '../types';
import { useToast } from '@chakra-ui/react';

export const useSubmitDetails = () => {
  const toast = useToast();

  const {
    data: freshData,
    isPending,
    mutate: submitDetails,
  } = useMutation({
    mutationKey: ['submit details'],
    mutationFn: (data: TSubmitDetailsResponse) => submitDetailsService(data),
    onSuccess: () =>
      toast({
        title: 'Marvellously!',
        description: 'Your data was successfully sent',
        status: 'success',
      }),
    onError: (err: TAxiosError) =>
      toast({
        title: 'Argh!',
        description: `An error has occurred: ${err.response?.data.message}`,
        status: 'error',
      }),
  });

  return { freshData, isPending, submitDetails };
};
