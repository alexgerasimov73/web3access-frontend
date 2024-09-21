import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { ProtectedRoute } from './guard/index';
import { WalletBadge } from '../components/WalletBadge';
import { Registration } from '../pages/Registration/Registration';

export const router = createBrowserRouter(
  //   [
  //   {
  //     path: '/',
  //     element: <Home />,
  //   },
  // ]
  createRoutesFromElements(
    <Route element={<ProtectedRoute.ConnectedWallet />}>
      <Route path="/" element={<WalletBadge />}>
        <Route path="/registration" element={<Registration />} />
        <Route element={<ProtectedRoute.AuthenticatedAndIdentified />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    </Route>,
  ),
);
