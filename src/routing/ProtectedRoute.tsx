import { Outlet } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { ChainProvider } from '../providers/ChainProvider';

export const ProtectedRoute = () => {
  const { isConnected } = useAccount();

  return (
    <>
      <div>ProtectedRoute</div>
      <Outlet />
    </>
  );
};
