import { RouterProvider } from 'react-router-dom';
import { router } from './routing/Routes';
import './App.css';

export const App = () => <RouterProvider router={router} />;
