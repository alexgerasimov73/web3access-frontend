import { useAccount, useWalletClient } from 'wagmi';
import { observer } from 'mobx-react-lite';
import { Button } from '@chakra-ui/react';
import { store } from '../store/store';
import { formatDateForSignature } from '../helpers/utils';
import { useLogin } from '../hooks/useLogin';

interface Props {
  readonly isPending: boolean;
  readonly setIsPending: (isPending: boolean) => void;
}

export const Login = observer(({ isPending, setIsPending }: Props) => {
  const { address, chainId } = useAccount();
  const { data: walletClient } = useWalletClient();
  const login = useLogin();

  const handleLogin = () => {
    if (!address || !chainId || !store.settings || store.user || !walletClient) return;

    setIsPending(true);

    // Request to sign our digest.
    const transmittedAt = formatDateForSignature(new Date(Date.now()));
    const digest = store.settings.logInSignatureTemplate
      .replace('{{chain_id}}', `${chainId}`)
      .replace('{{iso8601_timestamp}}', transmittedAt)
      .replace('{{realm}}', store.settings.signatureRealm);

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
});
