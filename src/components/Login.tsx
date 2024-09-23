import { useAccount, useWalletClient } from 'wagmi';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { store } from '../store/store';
import { formatDateForSignature } from '../helpers/utils';

// TODO: Implement the request of settings.
const signInSignatureTemplate = '{{chain_id}}:{{iso8601_timestamp}}:{{realm}}:CX_Authentication';
const signatureRealm = 'Staging';

export const Login = () => {
  const { chainId } = useAccount();
  const { data: walletClient } = useWalletClient();
  const [isSigning, setIsSigning] = useState(false);

  const handleLogin = () => {
    if (store.user || !walletClient) return;

    setIsSigning(true);

    // Request to sign our digest.
    const transmittedAt = formatDateForSignature(new Date(Date.now()));
    console.log('transmittedAt', transmittedAt);
    const digest = signInSignatureTemplate
      .replace('{{chain_id}}', `${chainId}`)
      .replace('{{iso8601_timestamp}}', transmittedAt)
      .replace('{{realm}}', signatureRealm);

    walletClient
      .signMessage({ message: digest })
      .then((ethSignature) => {
        console.log('ethSignature', ethSignature);
        // TODO: Implement authenticate method.
      })
      .catch((err) => console.error(err))
      .finally(() => setIsSigning(false));
  };

  return (
    <Button disabled={isSigning} size="lg" colorScheme="green" onClick={handleLogin}>
      Login
    </Button>
  );
};
