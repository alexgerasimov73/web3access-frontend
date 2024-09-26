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
import { RegistrationFlowStep, StartRegistrationStep } from '../../../helpers/constants';
import { assertUnreachable } from '../../../helpers/utils';
import { useEffect } from 'react';

interface Props {
  readonly step: StartRegistrationStep;
}

const titleForStep = (step: RegistrationFlowStep) => {
  switch (step) {
    case RegistrationFlowStep.VerifyEmail:
      return 'Verify Email';
    case RegistrationFlowStep.YourDetails:
      return 'Your Details';
    case RegistrationFlowStep.ConnectWallet:
      return 'Confirmation Wallet';
    case RegistrationFlowStep.Documentation:
      return 'Documentation';
    case RegistrationFlowStep.KYCAML:
      return 'Verify Identity';
    case RegistrationFlowStep.Confirmation:
      return 'Confirmation';
    default:
      assertUnreachable(step);
  }
};

const steps = [
  { title: titleForStep(RegistrationFlowStep.VerifyEmail) },
  { title: titleForStep(RegistrationFlowStep.YourDetails) },
  { title: titleForStep(RegistrationFlowStep.ConnectWallet) },
  { title: titleForStep(RegistrationFlowStep.Documentation) },
  { title: titleForStep(RegistrationFlowStep.KYCAML) },
  { title: titleForStep(RegistrationFlowStep.Confirmation) },
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
      top="10rem"
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
