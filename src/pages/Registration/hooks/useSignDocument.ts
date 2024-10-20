import { useMutation } from '@tanstack/react-query';
import { signDocumentService } from '../../../services/RegistrationService';
import { TAxiosError } from '../../../helpers/constants';
import type { TSignDocumentResponse } from '../types';
import { useToast } from '@chakra-ui/react';

export const useSignDocument = () => {
  const toast = useToast();

  const { data: freshData, mutate: signDocument } = useMutation({
    mutationKey: ['sign document'],
    mutationFn: (data: TSignDocumentResponse) => signDocumentService(data),
    onSuccess: () =>
      toast({
        title: 'Remarkably!',
        description: 'Your data was successfully sent',
        status: 'success',
      }),
    onError: (err: TAxiosError) =>
      toast({
        title: 'Arghhhh!',
        description: `An error has occured: ${err.response?.data.message}`,
        status: 'error',
      }),
  });

  return { freshData, signDocument };
};
