import { useMutation } from '@tanstack/react-query';
import { confirmWalletService } from '../../../services/RegistrationService';
import type { IRegistrationResponse, TConfirmWalletResponse } from '../types';
import { useToast } from '@chakra-ui/react';
import { TAxiosError } from '../../../helpers/types';

export const useConfirmWallet = (refreshData: (data: IRegistrationResponse) => void) => {
  const toast = useToast();

  const { mutate: confirmWallet } = useMutation({
    mutationKey: ['confirm wallet'],
    mutationFn: (data: TConfirmWalletResponse) => confirmWalletService(data),
    onSuccess: (response) => {
      toast({
        title: 'Splendidly!',
        description: 'Your data was successfully sent',
        status: 'success',
      });
      refreshData(response.data);
    },
    onError: (err: TAxiosError) =>
      toast({
        title: 'Oh no!',
        description: `An error has occurred: ${err.response?.data.message}`,
        status: 'error',
      }),
  });

  return { confirmWallet };
};
