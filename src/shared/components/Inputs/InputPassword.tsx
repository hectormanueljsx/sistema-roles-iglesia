import { Input, type InputProps } from '@heroui/react';
import { useState } from 'react';

import { Eye, EyeOff } from '../Icons';

interface InputPasswordProps extends InputProps {}

export const InputPassword = ({
  size = 'md',
  variant = 'bordered',
  radius = 'sm',
  labelPlacement = 'outside-top',
  ...props
}: InputPasswordProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      {...props}
      type={isVisible ? 'text' : 'password'}
      size={size}
      variant={variant}
      radius={radius}
      labelPlacement={labelPlacement}
      endContent={
        <button
          aria-label='toggle password visibility'
          className='focus:outline-solid outline-transparent'
          type='button'
          onClick={toggleVisibility}
        >
          {isVisible ? <EyeOff /> : <Eye />}
        </button>
      }
    />
  );
};
