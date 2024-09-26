import { VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { RegistrationStepper } from './RegistrationStepper';
import { VerifyEmail } from './Steps/VerifyEmail';
import { Details } from './Steps/Details';
import { RegistrationData, RegistrationFlowStep } from '../../../helpers/constants';

interface Props {
  readonly id: string;
}

export const RegistrationFlow = ({ id }: Props) => {
  const [registrationData, setRegistrationData] = useState<RegistrationData>();
  console.log('registrationData', registrationData);

  const getStepAndContent = () => {
    if (!registrationData) {
      return {
        step: RegistrationFlowStep.VerifyEmail,
        content: <VerifyEmail id={id} refreshData={setRegistrationData} />,
      };
    } else if (registrationData.onboardingStep === RegistrationFlowStep.YourDetails) {
      return {
        step: RegistrationFlowStep.YourDetails,
        content: <Details data={registrationData} refreshData={setRegistrationData} />,
      };
    }

    return { step: 0, content: <></> };
  };

  const { content, step } = getStepAndContent();

  return (
    <VStack pos="relative" justify="center" h="full">
      <RegistrationStepper step={step} />
      {content}
    </VStack>
  );
};
