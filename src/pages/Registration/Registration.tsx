import { Flex } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { RegistrationFlow } from './RegistrationFlow';
import { StartRegistration } from './StartRegistration/StartRegistration';

export const Registration = () => {
  const [searchParam] = useSearchParams();
  const registrationId = searchParam.get('id');

  return (
    <Flex justify="center" align="center" h="100vh">
      {registrationId ? <RegistrationFlow id={registrationId} /> : <StartRegistration />}
    </Flex>
  );
};
