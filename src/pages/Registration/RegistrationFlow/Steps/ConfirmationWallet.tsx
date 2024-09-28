import { Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { useAccount, useWalletClient } from 'wagmi';
import { useState } from 'react';
import { Card } from '../../../../components/Card';
import { formatDateForSignature } from '../../../../helpers/utils';
import { RegistrationFlowStep, type StepProps } from '../../types';

// TODO: Implement the request of settings.
const confirmEthAddressTemplate =
  'I {{full_name}}, {{iso8601_timestamp}}, confirmed that I am going to use {{eth_address}} address at the web3Access platform.';

export const ConfirmationWallet = ({ data, refreshData }: StepProps) => {
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
    <Card title="Wallet address">
      <Text>You will need a digital wallet address to gain access to the platform.</Text>

      <FormControl mb="4">
        <FormLabel htmlFor="ethAddress">Address</FormLabel>
        <Input id="ethAddress" isDisabled value={address} />
      </FormControl>

      <Button w="full" colorScheme="green" isLoading={isSigning} onClick={handleSubmit}>
        Confirm Address
      </Button>
    </Card>
  );
};
