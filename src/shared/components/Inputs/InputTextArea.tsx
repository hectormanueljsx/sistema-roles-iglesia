import { type TextAreaProps, Textarea } from '@heroui/react';

interface InputTextAreaProps extends TextAreaProps {}

export const InputTextArea = ({
  size = 'md',
  variant = 'bordered',
  radius = 'sm',
  labelPlacement = 'outside-top',
  ...props
}: InputTextAreaProps) => {
  return (
    <Textarea
      {...props}
      type='text'
      classNames={{
        input: 'py-2',
      }}
      size={size}
      variant={variant}
      radius={radius}
      minRows={3}
      labelPlacement={labelPlacement}
    />
  );
};
