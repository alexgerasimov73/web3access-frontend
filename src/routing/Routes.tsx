import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../components/Loader';
import { lazyLoad } from '../helpers/utils';
import { ConnectedWalletGuard } from './guard/ConnectedWalletGuard';
import { AuthenticatedGuard } from './guard/AuthenticatedGuard';

const WalletBadge = lazyLoad('../components/WalletBadge', 'WalletBadge');
const Registration = lazyLoad('../pages/Registration/Registration', 'Registration');
const Dashboard = lazyLoad('../pages/Dashboard/Dashboard', 'Dashboard');

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<ConnectedWalletGuard />}>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <WalletBadge />
          </Suspense>
        }>
        <Route path="registration" element={<Registration />} />
        <Route element={<AuthenticatedGuard />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Route>
    </Route>,
  ),
);
