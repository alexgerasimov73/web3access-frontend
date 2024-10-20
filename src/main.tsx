import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, ColorModeScript, ToastProviderProps } from '@chakra-ui/react';
import theme from './theme';
import { App } from './App.tsx';
import './styles/main.scss';

// TODO: Separate Chakra Provider.
const toastOptions: ToastProviderProps = {
  defaultOptions: { duration: 5000, isClosable: true, position: 'top-right' },
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme} toastOptions={toastOptions}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </StrictMode>,
);
