import { Input, type InputProps } from '@heroui/react';

interface InputTextProps extends InputProps {}

export const InputText = ({
  size = 'md',
  variant = 'bordered',
  radius = 'sm',
  labelPlacement = 'outside-top',
  ...props
}: InputTextProps) => {
  return (
    <Input
      {...props}
      type='text'
      size={size}
      variant={variant}
      radius={radius}
      labelPlacement={labelPlacement}
    />
  );
};
