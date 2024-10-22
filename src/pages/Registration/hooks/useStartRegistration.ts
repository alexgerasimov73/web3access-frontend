import { useMutation } from '@tanstack/react-query';
import { startRegistrationService } from '../../../services/RegistrationService';
import { TAxiosError } from '../../../helpers/constants';
import { useToast } from '@chakra-ui/react';

export const useStartRegistration = () => {
  const toast = useToast();

  const {
    isPending,
    isSuccess,
    mutate: startRegistration,
  } = useMutation({
    mutationKey: ['start registration'],
    mutationFn: async (emailAddress: string) => await startRegistrationService(emailAddress),
    onSuccess: () =>
      toast({
        title: 'Well done!',
        description: 'Your email address was successfully sent',
        status: 'success',
      }),
    onError: (err: TAxiosError) =>
      toast({
        title: 'Oh no!',
        description: `An error has occured: ${err.response?.data.message}`,
        status: 'error',
      }),
  });

  return { isPending, isSuccess, startRegistration };
};
