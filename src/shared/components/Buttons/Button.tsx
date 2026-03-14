import { Button as ButtonBase, type ButtonProps as ButtonBaseProps } from '@heroui/react';

interface ButtonProps extends ButtonBaseProps {}

export const Button = ({
  type = 'button',
  size = 'md',
  variant = 'solid',
  radius = 'sm',
  color = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <ButtonBase
      {...props}
      type={type}
      size={size}
      variant={variant}
      radius={radius}
      color={color}
    >
      {props.children}
    </ButtonBase>
  );
};
