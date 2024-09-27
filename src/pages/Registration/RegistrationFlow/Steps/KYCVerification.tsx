import { Button, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { RegistrationData, RegistrationFlowStep } from '../../../../helpers/constants';
import { ExternalLinkIcon } from '@chakra-ui/icons';

interface Props {
  readonly data: RegistrationData;
  readonly refreshData: (data: RegistrationData) => void;
}

export const KYCVerification = ({ data, refreshData }: Props) => {
  const onContinue = () => {
    const newData = {
      ...data,
      identityCheckStatus: true,
      onboardingStep: RegistrationFlowStep.Confirmation,
    };
    refreshData(newData);
  };

  return (
    <Flex
      className="RotationAnimation"
      direction="column"
      gap={10}
      w={480}
      p="48px 32px 56px"
      borderRadius={16}
      border="1px"
      borderColor="brand.800">
      <Heading as="h3" alignSelf="center" size="lg">
        KYC/AML Verification
      </Heading>

      <Text>
        <b>Important Notice:</b>
        <br />
        This step is part of a simulated onboarding process for demonstration purposes only.{' '}
        <b>Web3Access</b> is an educational project, and I do not collect, verify, or process any
        real personal information.
      </Text>
      <Text>
        In a real-world application, compliance with KYC (Know Your Customer) and AML (Anti-Money
        Laundering) regulations is essential to ensure user identity and prevent illegal activity.
        We recommend using a trusted service such as{' '}
        <Link href="https://onfido.com/" isExternal>
          Onfido
        </Link>{' '}
        for secure identity verification and compliance with these regulations.
      </Text>
      <Text>
        For more information about KYC/AML services, visit the{' '}
        <Link href="https://onfido.com/" isExternal>
          Onfido website <ExternalLinkIcon mx="2px" />
        </Link>
        .
      </Text>

      <Button w="full" colorScheme="green" onClick={onContinue}>
        Continue
      </Button>
    </Flex>
  );
};
