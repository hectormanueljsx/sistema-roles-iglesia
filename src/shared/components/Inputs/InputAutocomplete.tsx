import { Autocomplete, AutocompleteItem, type AutocompleteProps } from '@heroui/react';

import type { SelectOptions } from '@/shared/types';

interface InputAutocompleteProps extends Omit<AutocompleteProps<SelectOptions>, 'children' | 'items'> {
  items: SelectOptions[];
}

export const InputAutocomplete = ({
  size = 'md',
  variant = 'bordered',
  radius = 'sm',
  labelPlacement = 'outside-top',
  ...props
}: InputAutocompleteProps) => {
  return (
    <Autocomplete
      {...props}
      placeholder='Seleccione una opción'
      size={size}
      variant={variant}
      radius={radius}
      labelPlacement={labelPlacement}
    >
      {item => <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>}
    </Autocomplete>
  );
};
