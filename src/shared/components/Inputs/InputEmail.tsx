import { Input, type InputProps } from '@heroui/react';

interface InputEmailProps extends InputProps {}

export const InputEmail = ({
  size = 'md',
  variant = 'bordered',
  radius = 'sm',
  labelPlacement = 'outside-top',
  ...props
}: InputEmailProps) => {
  return (
    <Input
      {...props}
      type='email'
      size={size}
      variant={variant}
      radius={radius}
      labelPlacement={labelPlacement}
    />
  );
};
