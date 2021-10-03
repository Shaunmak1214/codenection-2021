import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: '"Raleway", sans-serif',
    body: '"Proxima Nova", sans-serif',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem', // 14px
    md: '1rem', // 15px
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem', // 25px
    '3xl': '1.875rem',
    '4xl': '2.25rem', //35px
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  sizes: {
    'container.xl': '1200px',
  },
});
export default theme;
