import { GreetingPage } from '../../components/GreetingPage';
import { useCheckAuth } from '../../hooks/useCheckAuth';
import { Loader } from '../../components/Loader';
import { useStore } from '../../store/useStore';
import { Dashboard } from '../../pages/Dashboard/Dashboard';

export const AuthenticatedGuard = () => {
  const { isLoading } = useCheckAuth();
  const user = useStore((state) => state.user);

  if (isLoading) {
    return <Loader />;
  }

  return user ? <Dashboard /> : <GreetingPage />;
};
