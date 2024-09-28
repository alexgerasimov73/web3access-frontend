import { VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { EmailSent } from './Steps/EmailSent';
import { Introduction } from './Steps/Introduction';
import { RegistrationStepper } from '../../../components/RegistrationStepper';
import { assertUnreachable } from '../../../helpers/utils';
import { stepsForStartRegistration } from '../utils';
import { StartRegistrationStep } from '../types';

export const StartRegistration = () => {
  const [step, setStep] = useState(StartRegistrationStep.Introduction);

  const renderStep = () => {
    switch (step) {
      case StartRegistrationStep.Introduction:
        return <Introduction setStep={setStep} />;
      case StartRegistrationStep.EmailSent:
        return <EmailSent />;
      default:
        assertUnreachable(step);
    }
  };

  return (
    <VStack pos="relative" justify="center" h="full">
      <RegistrationStepper step={step} steps={stepsForStartRegistration} />
      {renderStep()}
    </VStack>
  );
};
