import type { IconProps } from '@/shared/types';

export const CalendarPlus = ({ size = 16, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
      <path d='M16 19h6' />
      <path d='M16 2v4' />
      <path d='M19 16v6' />
      <path d='M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5' />
      <path d='M3 10h18' />
      <path d='M8 2v4' />
    </svg>
  );
};
