import { useAccount, useWalletClient } from 'wagmi';
import { Button } from '@chakra-ui/react';
import { formatDateForSignature } from '../helpers/utils';
import { useLogin } from '../hooks/useLogin';
import { useStore } from '../store/useStore';

interface Props {
  readonly isPending: boolean;
  readonly setIsPending: (isPending: boolean) => void;
}

export const Login = ({ isPending, setIsPending }: Props) => {
  const { address, chainId } = useAccount();
  const { data: walletClient } = useWalletClient();
  const login = useLogin();
  const settings = useStore((state) => state.settings);
  const user = useStore((state) => state.user);

  const handleLogin = () => {
    if (!address || !chainId || !settings || user || !walletClient) return;

    setIsPending(true);

    // Request to sign our digest.
    const transmittedAt = formatDateForSignature(new Date(Date.now()));
    const digest = settings.logInSignatureTemplate
      .replace('{{chain_id}}', `${chainId}`)
      .replace('{{iso8601_timestamp}}', transmittedAt)
      .replace('{{realm}}', settings.signatureRealm);

    walletClient
      .signMessage({ message: digest })
      .then((ethSignature) => login({ chainId, ethAddress: address, ethSignature, transmittedAt }))
      .catch((err) => console.error(err))
      .finally(() => setIsPending(false));
  };

  return (
    <Button disabled={isPending} size="lg" onClick={handleLogin}>
      Login
    </Button>
  );
};
