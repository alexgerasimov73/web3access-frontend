import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { ProtectedRoute } from './guard/index';
import { Loader } from '../components/Loader';
import { lazyLoad } from '../helpers/utils';

const WalletBadge = lazyLoad('../components/WalletBadge', 'WalletBadge');
const Registration = lazyLoad('../pages/Registration/Registration', 'Registration');
const Home = lazyLoad('../pages/Home/Home', 'Home');

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<ProtectedRoute.ConnectedWallet />}>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <WalletBadge />
          </Suspense>
        }>
        <Route path="registration" element={<Registration />} />
        <Route element={<ProtectedRoute.AuthenticatedAndIdentified />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    </Route>,
  ),
);
