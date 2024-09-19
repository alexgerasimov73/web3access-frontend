import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
// import { Home } from '../pages/Home/Home';
import { ProtectedRoute } from './guard/index';
import { WalletBadge } from '../components/WalletBadge';

export const router = createBrowserRouter(
  //   [
  //   {
  //     path: '/',
  //     element: <Home />,
  //   },
  // ]
  createRoutesFromElements(
    <Route element={<ProtectedRoute.ConnectedWallet />}>
      <Route path="/" element={<WalletBadge />} />
    </Route>,
  ),
);
