import { DatePicker, type DatePickerProps } from '@heroui/react';

interface InputDatePickerProps extends DatePickerProps {}

export const InputDatePicker = ({
  size = 'md',
  variant = 'bordered',
  radius = 'sm',
  labelPlacement = 'outside-top',
  ...props
}: InputDatePickerProps) => {
  return (
    <DatePicker
      {...props}
      size={size}
      variant={variant}
      radius={radius}
      firstDayOfWeek='mon'
      labelPlacement={labelPlacement}
    />
  );
};
