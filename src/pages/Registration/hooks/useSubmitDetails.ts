import { useMutation } from '@tanstack/react-query';
import { submitDetailsService } from '../../../services/RegistrationService';
import type { IRegistrationResponse, TSubmitDetailsResponse } from '../types';
import { useToast } from '@chakra-ui/react';
import { TAxiosError } from '../../../helpers/types';

export const useSubmitDetails = (refreshData: (data: IRegistrationResponse) => void) => {
  const toast = useToast();

  const { isPending, mutate: submitDetails } = useMutation({
    mutationKey: ['submit details'],
    mutationFn: (data: TSubmitDetailsResponse) => submitDetailsService(data),
    onSuccess: (response) => {
      toast({
        title: 'Marvellously!',
        description: 'Your data was successfully sent',
        status: 'success',
      });
      refreshData(response.data);
    },
    onError: (err: TAxiosError) =>
      toast({
        title: 'Argh!',
        description: `An error has occurred: ${err.response?.data.message}`,
        status: 'error',
      }),
  });

  return { isPending, submitDetails };
};
