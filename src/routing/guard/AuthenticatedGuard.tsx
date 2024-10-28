import { Outlet } from 'react-router-dom';
import { GreetingPage } from '../../components/GreetingPage';
import { useCheckAuth } from '../../hooks/useCheckAuth';
import { Loader } from '../../components/Loader';
import { useStore } from '../../store/useStore';

export const AuthenticatedGuard = () => {
  const { isLoading } = useCheckAuth();
  const user = useStore((state) => state.user);

  if (isLoading) {
    return <Loader />;
  }

  return user ? <Outlet /> : <GreetingPage />;
};
