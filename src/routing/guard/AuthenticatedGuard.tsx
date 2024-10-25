import { Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { store } from '../../store/store';
import { GreetingPage } from '../../components/GreetingPage';
import { useCheckAuth } from '../../hooks/useCheckAuth';
import { Loader } from '../../components/Loader';

export const AuthenticatedGuard = observer(() => {
  const { isLoading } = useCheckAuth();

  if (isLoading) {
    return <Loader />;
  }

  return store.user ? <Outlet /> : <GreetingPage />;
});
