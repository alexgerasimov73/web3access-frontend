import { Outlet } from 'react-router-dom';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';

export const ProtectedRoute = () => {
  const { isConnected, addresses: address, chain } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  console.log('isConnected', isConnected);
  console.log('address', address);
  console.log('chain', chain);

  const handleConnect = () => {
    if (address) return disconnect();

    connect({ connector: injected() });
  };

  return (
    <>
      <div>ProtectedRoute</div>
      <button onClick={handleConnect}>{address ? 'Disconnect' : 'Connect'}</button>
      <Outlet />
    </>
  );
};
