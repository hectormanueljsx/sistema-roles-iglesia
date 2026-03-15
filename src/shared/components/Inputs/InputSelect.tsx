import { Select, SelectItem, type SelectProps } from '@heroui/react';

type SelectOption = {
  key: string | number;
  label: string;
};

interface InputSelectProps extends Omit<SelectProps, 'children'> {
  options?: SelectOption[];
}

export const InputSelect = ({
  options = [],
  size = 'md',
  variant = 'bordered',
  radius = 'sm',
  labelPlacement = 'outside-top',
  ...props
}: InputSelectProps) => {
  return (
    <Select
      {...props}
      size={size}
      variant={variant}
      radius={radius}
      labelPlacement={labelPlacement}
    >
      {options.map(opt => (
        <SelectItem key={opt.key}>{opt.label}</SelectItem>
      ))}
    </Select>
  );
};
