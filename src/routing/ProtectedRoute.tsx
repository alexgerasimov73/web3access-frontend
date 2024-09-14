import { Outlet } from 'react-router-dom';
import { useAccount } from 'wagmi';

export const ProtectedRoute = () => {
  const { isConnected } = useAccount();

  return (
    <>
      <div>ProtectedRoute</div>
      <Outlet />
    </>
  );
};
