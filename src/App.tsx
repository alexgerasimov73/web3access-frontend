import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export const App = () => <RouterProvider router={router} />;
