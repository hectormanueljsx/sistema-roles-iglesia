import { heroui } from '@heroui/react';

export default heroui({
  layout: {
    fontSize: {
      tiny: '0.75rem',
      small: '1rem',
      medium: '1.125rem',
      large: '1.15rem',
    },
  },
  themes: {
    light: {
      colors: {
        primary: {
          DEFAULT: '#404e3b',
          foreground: '#ffffff',
        },
        default: {
          foreground: '#404e3b',
        },
        foreground: {
          DEFAULT: '#404e3b',
          foreground: '#404e3b',
        },
        danger: {
          DEFAULT: '#eb4203',
          foreground: '#eb4203',
        },
      },
    },
  },
});
