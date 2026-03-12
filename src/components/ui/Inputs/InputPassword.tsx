import { Input, type InputProps } from '@heroui/input';
import { useState } from 'react';

import { EyeSlashOutlined } from '../Icons/EyeSlashOutlined';
import { EyeOutlined } from '../Icons/EyeOutlined';

interface InputPasswordProps extends InputProps {}

export const InputPassword = ({
  size = 'md',
  variant = 'bordered',
  radius = 'md',
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
          className='text-[#11171c] focus:outline-solid outline-transparent'
          type='button'
          onClick={toggleVisibility}
        >
          {isVisible ? <EyeSlashOutlined /> : <EyeOutlined />}
        </button>
      }
    />
  );
};
