import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const inputSelectStyles = {
  variants: {
    outline: {
      field: {
        _focus: {
          borderColor: 'brand.800',
        },
      },
    },
  },
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
  shadows: {
    outline: '0 0 0 3px rgba(240, 115, 0, 0.6)',
  },
  styles: {
    global: {
      body: {
        bg: 'brand.900',
        color: 'brand.400',
        fontSize: 'lg',
      },
    },
  },
  components: {
    Input: { ...inputSelectStyles },
    Select: { ...inputSelectStyles },
  },
});

export default theme;
