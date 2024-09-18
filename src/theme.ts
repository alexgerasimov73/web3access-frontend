import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      900: '#0b0b0b',
      800: '#25ffa3',
      700: '#f07300',
      600: '#0927f1',
      500: '#dddddd',
      400: '#ffffff',
    },
  },
  fonts: {
    heading: '"Darker Grotesque", "Avenir", "Helvetica", "Arial", sans-serif',
    body: '"Darker Grotesque", "Avenir", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
