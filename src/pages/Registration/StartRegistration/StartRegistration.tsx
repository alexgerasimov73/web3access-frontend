import { VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { EmailSent } from './Steps/EmailSent';
import { Introduction } from './Steps/Introduction';
import { Stepper } from './Stepper';
import { StartRegistrationStep } from '../../../helpers/constants';
import { assertUnreachable } from '../../../helpers/utils';

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
    <VStack>
      <Stepper step={step} />
      {renderStep()}
    </VStack>
  );
};
