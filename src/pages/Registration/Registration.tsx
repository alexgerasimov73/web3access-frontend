import { Flex } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { lazy } from 'react';

const RegistrationFlow = lazy(() => import('./RegistrationFlow/RegistrationFlow.tsx'));
const StartRegistration = lazy(() => import('./StartRegistration/StartRegistration.tsx'));

export const Registration = () => {
  const [searchParam] = useSearchParams();
  const registrationId = searchParam.get('id');

  return (
    <Flex justify="center" align="center" h="100vh">
      {registrationId ? <RegistrationFlow id={registrationId} /> : <StartRegistration />}
    </Flex>
  );
};
