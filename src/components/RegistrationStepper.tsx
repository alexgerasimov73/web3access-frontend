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
import { RegistrationFlowStep, StartRegistrationStep } from '../pages/Registration/types';

interface Props {
  readonly step: StartRegistrationStep | RegistrationFlowStep;
  readonly steps: ReadonlyArray<{
    title: string | undefined;
  }>;
}

export const RegistrationStepper = ({ step, steps }: Props) => {
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
