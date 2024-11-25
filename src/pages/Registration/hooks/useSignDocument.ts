import { useMutation } from '@tanstack/react-query';
import { signDocumentService } from '../../../services/RegistrationService';
import type { IRegistrationResponse, TSignDocumentResponse } from '../types';
import { useToast } from '@chakra-ui/react';
import { TAxiosError } from '../../../helpers/types';

export const useSignDocument = (refreshData: (data: IRegistrationResponse) => void) => {
  const toast = useToast();

  const { mutate: signDocument } = useMutation({
    mutationKey: ['sign document'],
    mutationFn: (data: TSignDocumentResponse) => signDocumentService(data),
    onSuccess: (response) => {
      toast({
        title: 'Remarkably!',
        description: 'Your data was successfully sent',
        status: 'success',
      });
      refreshData(response.data);
    },
    onError: (err: TAxiosError) =>
      toast({
        title: 'Arghhhh!',
        description: `An error has occurred: ${err.response?.data.message}`,
        status: 'error',
      }),
  });

  return { signDocument };
};
