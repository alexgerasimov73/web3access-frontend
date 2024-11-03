import { useQuery } from '@tanstack/react-query';
import { launchServerSevice } from '../services/UserService';

// This hook is exceptionally needed to launch the server
// so that the application can be ready for work sooner because,
// on the free plan, the server doesn't work permanently.
export const useLaunchServer = () =>
  useQuery({
    queryKey: ['launch server'],
    queryFn: async () => await launchServerSevice(),
    retry: false,
    staleTime: Infinity,
  });
