import { Select, SelectItem, type SelectProps } from '@heroui/react';

import type { SelectOptions } from '@/shared/types';

interface InputSelectProps extends Omit<SelectProps<SelectOptions>, 'children' | 'items'> {
  items: SelectOptions[];
}

export const InputSelect = ({
  size = 'md',
  variant = 'bordered',
  radius = 'sm',
  labelPlacement = 'outside-top',
  ...props
}: InputSelectProps) => {
  return (
    <Select
      {...props}
      placeholder='Seleccione una opción'
      size={size}
      variant={variant}
      radius={radius}
      labelPlacement={labelPlacement}
    >
      {item => <SelectItem key={item.key}>{item.label}</SelectItem>}
    </Select>
  );
};
