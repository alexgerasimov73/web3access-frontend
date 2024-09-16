import { RouterProvider } from 'react-router-dom';
import { router } from './routing/Routes';
import { ChainProvider } from './providers/ChainProvider/ChainProvider';
import './App.css';

export const App = () => (
  <ChainProvider>
    <RouterProvider router={router} />
  </ChainProvider>
);
