import { Button as ButtonBase, type ButtonProps as ButtonBaseProps } from '@heroui/button';

interface ButtonProps extends ButtonBaseProps {}

export const Button = ({
  type = 'button',
  size = 'md',
  variant = 'solid',
  radius = 'md',
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
