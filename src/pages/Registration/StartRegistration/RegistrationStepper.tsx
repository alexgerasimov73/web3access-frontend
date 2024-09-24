import {
  Step,
  StepIndicator,
  Stepper,
  StepSeparator,
  StepStatus,
  Text,
  useSteps,
  VStack,
} from '@chakra-ui/react';
import { StartRegistrationStep } from '../../../helpers/constants';
import { assertUnreachable } from '../../../helpers/utils';
import { useEffect } from 'react';

interface Props {
  readonly step: StartRegistrationStep;
}

const titleForStep = (step: StartRegistrationStep) => {
  switch (step) {
    case StartRegistrationStep.Introduction:
      return 'Introduction';
    case StartRegistrationStep.EmailSent:
      return 'Email Sent';
    default:
      assertUnreachable(step);
  }
};

const steps = [
  { title: titleForStep(StartRegistrationStep.Introduction) },
  { title: titleForStep(StartRegistrationStep.EmailSent) },
];

export const RegistrationStepper = ({ step }: Props) => {
  const { activeStep, setActiveStep } = useSteps({
    index: step,
    count: steps.length,
  });

  useEffect(() => {
    setActiveStep(step);
  }, [step]);

  return (
    <Stepper
      className="SlideFromTop"
      index={activeStep}
      pos="fixed"
      top="10rem"
      size="sm"
      gap="0"
      colorScheme="green">
      {steps.map((step, index) => (
        <VStack align="flex-start">
          <Step key={index} style={{ gap: 0, marginLeft: '1.5rem' }}>
            <StepIndicator>
              <StepStatus />
            </StepIndicator>
            <StepSeparator style={{ width: '10rem', marginLeft: 0, marginRight: '-1.5rem' }} />
          </Step>
          <Text>{step.title}</Text>
        </VStack>
      ))}
    </Stepper>
  );
};
