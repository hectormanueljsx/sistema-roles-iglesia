import type { IconProps } from '@/shared/types';

export const ChevronDown = ({ size = 16, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
      <path d='m6 9 6 6 6-6' />
    </svg>
  );
};
