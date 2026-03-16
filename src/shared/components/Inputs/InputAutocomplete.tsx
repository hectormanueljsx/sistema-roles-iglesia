import { Autocomplete, AutocompleteItem, type AutocompleteProps } from '@heroui/react';

import type { SelectOptions } from '@/shared/types';

interface InputAutocompleteProps extends Omit<AutocompleteProps, 'children'> {
  options?: SelectOptions[];
}

export const InputAutocomplete = ({
  options = [],
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
      {options.map(opt => (
        <AutocompleteItem key={opt.key}>{opt.label}</AutocompleteItem>
      ))}
    </Autocomplete>
  );
};
