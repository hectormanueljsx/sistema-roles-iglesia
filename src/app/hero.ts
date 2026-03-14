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
          DEFAULT: '#2d68fe',
          foreground: '#ffffff',
        },
        foreground: {
          DEFAULT: '#324054',
          foreground: '#324054',
        },
        default: {
          DEFAULT: '#ffffff',
          foreground: '#324054',
        },
        danger: {
          DEFAULT: '#ff472e',
          foreground: '#ff472e',
        },
      },
    },
  },
});
