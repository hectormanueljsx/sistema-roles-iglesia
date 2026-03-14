import type { IconProps } from '@/shared/types';

export const ChevronUp = ({ size = 16, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
      <path d='m18 15-6-6-6 6' />
    </svg>
  );
};
