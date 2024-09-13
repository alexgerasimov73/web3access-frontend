import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { ProtectedRoute } from './ProtectedRoute';

export const router = createBrowserRouter(
  //   [
  //   {
  //     path: '/',
  //     element: <Home />,
  //   },
  // ]
  createRoutesFromElements(
    <Route element={<ProtectedRoute />}>
      <Route path="/" element={<Home />} />
    </Route>,
  ),
);
