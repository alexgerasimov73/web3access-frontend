import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      900: '#0b0b0b',
      800: '#25ffa3',
      600: '#f07300',
      500: '#0927f1',
      700: '#dddddd',
    },
  },
  fonts: {
    heading: '"Darker Grotesque", sans-serif',
    body: '"Darker Grotesque", sans-serif',
  },
});

export default theme;
