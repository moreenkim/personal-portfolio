// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Fredoka One', sans-serif`,
    body: `'ABeeZee', sans-serif`,
  },
  colors: {
    brand: {
      900: '#1A365D',
      100: '#E3F2FD',
    },
  },
});

export default theme;
