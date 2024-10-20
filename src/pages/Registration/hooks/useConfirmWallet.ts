import { useMutation } from '@tanstack/react-query';
import { confirmWalletService } from '../../../services/RegistrationService';
import { TAxiosError } from '../../../helpers/constants';
import { useToast } from '@chakra-ui/react/toast';
import type { TConfirmWalletResponse } from '../types';

export const useConfirmWallet = () => {
  const toast = useToast();

  const { data: freshData, mutate: confirmWallet } = useMutation({
    mutationKey: ['confirm wallet'],
    mutationFn: (data: TConfirmWalletResponse) => confirmWalletService(data),
    onSuccess: () =>
      toast({
        title: 'Splendidly!',
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

  return { freshData, confirmWallet };
};
