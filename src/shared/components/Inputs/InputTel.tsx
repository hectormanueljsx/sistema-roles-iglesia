import { Input, type InputProps } from '@heroui/react';
import { useState } from 'react';

interface InputTelProps extends InputProps {}

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  const parts = [digits.slice(0, 3), digits.slice(3, 6), digits.slice(6, 8), digits.slice(8, 10)].filter(Boolean);
  return parts.join(' ');
};

export const InputTel = ({
  size = 'md',
  variant = 'bordered',
  radius = 'sm',
  labelPlacement = 'outside-top',
  onChange,
  ...props
}: InputTelProps) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setValue(formatted);

    onChange?.({
      ...e,
      target: { ...e.target, value: formatted },
    });
  };

  return (
    <Input
      {...props}
      type='tel'
      value={value}
      onChange={handleChange}
      size={size}
      variant={variant}
      radius={radius}
      labelPlacement={labelPlacement}
    />
  );
};
