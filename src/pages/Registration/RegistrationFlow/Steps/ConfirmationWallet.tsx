import { Button, Flex, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import { useAccount, useWalletClient } from 'wagmi';
import { useState } from 'react';
import { RegistrationData, RegistrationFlowStep } from '../../../../helpers/constants';
import { formatDateForSignature } from '../../../../helpers/utils';

// TODO: Implement the request of settings.
const confirmEthAddressTemplate =
  'I {{full_name}}, {{iso8601_timestamp}}, confirmed that I am going to use {{eth_address}} address at the web3Access platform.';

interface Props {
  readonly data: RegistrationData;
  readonly refreshData: (data: RegistrationData) => void;
}

export const ConfirmationWallet = ({ data, refreshData }: Props) => {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const [isSigning, setIsSigning] = useState(false);

  const handleSubmit = () => {
    if (!walletClient || !address) return;

    setIsSigning(true);

    const transmittedAt = formatDateForSignature(new Date(Date.now()));
    const digest = confirmEthAddressTemplate
      .replace('{{full_name}}', `${data.firstName} ${data.lastName}`)
      .replace('{{iso8601_timestamp}}', transmittedAt)
      .replace('{{eth_address}}', `${address}`);

    walletClient
      .signMessage({ message: digest })
      .then((ethSignature) => {
        console.log('ethSignature', ethSignature);

        const newData = {
          ...data,
          ethAddress: address,
          onboardingStep: RegistrationFlowStep.Documentation,
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
      w={360}
      p="48px 32px 56px"
      borderRadius={16}
      border="1px"
      borderColor="brand.800">
      <Heading as="h3" alignSelf="center" size="lg">
        Wallet address
      </Heading>

      <Text>You will need a digital wallet address to gain access to the platform.</Text>

      <FormControl mb="4">
        <FormLabel htmlFor="ethAddress">Address</FormLabel>
        <Input id="ethAddress" placeholder="0xeDd48..." readOnly value={address} />
      </FormControl>

      <Button w="full" colorScheme="green" isLoading={isSigning} onClick={handleSubmit}>
        Confirm Address
      </Button>
    </Flex>
  );
};
