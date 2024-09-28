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
import { useEffect } from 'react';
import { assertUnreachable } from '../../../helpers/utils';
import { StartRegistrationStep } from '../types';

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
  }, [step, setActiveStep]);

  return (
    <Stepper
      className="SlideFromTop"
      index={activeStep}
      pos="fixed"
      top="7rem"
      size="sm"
      gap="0"
      colorScheme="green">
      {steps.map((step, index) => (
        <VStack key={index} align="flex-start">
          <Step style={{ gap: 0, marginLeft: '1.5rem' }}>
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
