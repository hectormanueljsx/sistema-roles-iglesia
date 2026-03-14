import type { CSSProperties } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Card = ({ className = '', style = {}, children }: CardProps) => {
  return (
    <div
      className={`w-full bg-white rounded-md shadow-[0px_1px_5px_0px_rgba(0,0,0,0.055)] p-5 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
