import { Button, Checkbox, Flex, Heading, Link, Text, VStack } from '@chakra-ui/react';
import { useWalletClient } from 'wagmi';
import { Address } from 'viem';
import { ChangeEvent, useState } from 'react';
import { formatDateForSignature, shortenAddress } from '../../../../helpers/utils';
import { RegistrationData, RegistrationFlowStep } from '../../../../helpers/constants';
import { ExternalLinkIcon } from '@chakra-ui/icons';

// TODO: Implement the request of settings.
const licenseSigningTemplate =
  'I, {{full_name}}, {{iso8601_timestamp}}, confirmed that I have read and agree to the terms and conditions set out in the licence agreement.';

interface Props {
  readonly address: Address;
  readonly data: RegistrationData;
  readonly refreshData: (data: RegistrationData) => void;
}

export const Documentation = ({ address, data, refreshData }: Props) => {
  const { data: walletClient } = useWalletClient();
  const [isChecked, setIschecked] = useState(false);
  const [isSigning, setIsSigning] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setIschecked(e.target.checked);

  const handleSubmit = () => {
    if (!walletClient) return;

    setIsSigning(true);

    const transmittedAt = formatDateForSignature(new Date(Date.now()));
    const digest = licenseSigningTemplate
      .replace('{{full_name}}', `${data.firstName} ${data.lastName}`)
      .replace('{{iso8601_timestamp}}', transmittedAt);

    walletClient
      .signMessage({ message: digest })
      .then((ethSignature) => {
        console.log('ethSignature', ethSignature);

        const newData = {
          ...data,
          documentsSignedAt: transmittedAt,
          onboardingStep: RegistrationFlowStep.KYCAML,
        };
        refreshData(newData);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsSigning(false));
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
        Licence Agreement
      </Heading>

      <Text>Please read and sign the licence agreement for using the platform:</Text>

      <VStack align="flex-start">
        <Link href="" isExternal>
          Open licence agreement <ExternalLinkIcon mx="2px" />
        </Link>

        <Checkbox isChecked={isChecked} colorScheme="green" size="lg" onChange={handleChange}>
          Accept
        </Checkbox>
      </VStack>

      <Text>{`I, ${data.firstName} ${data.lastName}, have read and agree to the terms and conditions set out in the licence agreement`}</Text>

      <Button
        w="full"
        colorScheme="green"
        isDisabled={!isChecked}
        isLoading={isSigning}
        onClick={handleSubmit}>
        Sign with {shortenAddress(address)}
      </Button>
    </Flex>
  );
};
