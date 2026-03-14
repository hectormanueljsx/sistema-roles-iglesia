import type { IconProps } from '@/shared/types';

export const Menu = ({ size = 16, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M21 5H3' />
      <path d='M21 12H9' />
      <path d='M21 19H7' />
    </svg>
  );
};
