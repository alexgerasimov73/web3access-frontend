import { Button, Checkbox, Link, Text, VStack } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useWalletClient } from 'wagmi';
import { Address } from 'viem';
import { ChangeEvent, useState } from 'react';
import { Card } from '../../../../components/Card';
import { formatDateForSignature, shortenAddress } from '../../../../helpers/utils';
import { RegistrationFlowStep, type StepProps } from '../../types';

// TODO: Implement the request of settings.
const licenseSigningTemplate =
  'I, {{full_name}}, {{iso8601_timestamp}}, confirmed that I have read and agree to the terms and conditions set out in the licence agreement.';

interface Props extends StepProps {
  readonly address: Address;
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
    <Card title="Licence Agreement">
      <Text>Please read and sign the licence agreement for using the platform:</Text>

      <VStack align="flex-start">
        <Link href="" isExternal>
          Open licence agreement <ExternalLinkIcon mx="2px" />
        </Link>

        <Checkbox isChecked={isChecked} size="lg" onChange={handleChange}>
          Accept
        </Checkbox>
      </VStack>

      <Text>{`I, ${data.firstName} ${data.lastName}, have read and agree to the terms and conditions set out in the licence agreement`}</Text>

      <Button w="full" isDisabled={!isChecked} isLoading={isSigning} onClick={handleSubmit}>
        Sign with {shortenAddress(address)}
      </Button>
    </Card>
  );
};
