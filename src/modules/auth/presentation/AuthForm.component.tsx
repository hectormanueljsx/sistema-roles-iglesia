'use client';

import Image from 'next/image';

import { Button } from '@/shared/components/Buttons';
import { InputEmail, InputPassword } from '@/shared/components/Inputs';
import { useAuthForm } from '../application/useAuthForm.hook';

export const AuthForm = () => {
  const { formik } = useAuthForm();

  const { values, handleBlur, setFieldValue, errors, touched, isSubmitting, handleSubmit } = formik;

  return (
    <div className='w-full flex flex-col gap-8 items-center md:flex-row-reverse md:gap-10'>
      <div className='w-full md:w-1/2'>
        <Image
          src='/banner-login.jpg'
          alt='Banner Login'
          width={1920}
          height={2880}
          priority
          className='h-45 w-full rounded-[20px] object-cover transition-all md:h-[calc(100vh-4rem)]'
        />
      </div>

      <div className='w-full flex justify-center md:w-1/2'>
        <div className='flex flex-col gap-6 max-w-97 md:gap-12'>
          <div className='flex flex-col gap-4 md:gap-7'>
            <p className='font-semibold text-3xl text-(--color-text-primary) transition-all lg:text-4xl'>
              Bienvenido de nuevo 👋
            </p>
            <div className='flex flex-col gap-1.5 text-(--color-text-secondary)'>
              <p className='text-base transition-all lg:text-xl'>
                "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del
                Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís."
              </p>
              <p className='font-medium text-base transition-all lg:text-xl text-end'>Colosenses 3:23-24</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-4 md:gap-6'
          >
            <InputEmail
              name='email'
              label='Correo electrónico'
              value={values.email}
              onValueChange={value => setFieldValue('email', value)}
              onBlur={handleBlur}
              placeholder='Correo electrónico'
              isInvalid={touched.email && !!errors.email}
              errorMessage={touched.email && errors.email}
              isRequired
              autoComplete='email'
            />

            <InputPassword
              name='password'
              label='Contraseña'
              value={values.password}
              onValueChange={value => setFieldValue('password', value)}
              onBlur={handleBlur}
              placeholder='Contraseña'
              isInvalid={touched.password && !!errors.password}
              errorMessage={touched.password && errors.password}
              isRequired
              autoComplete='current-password'
            />

            <Button
              type='submit'
              isLoading={isSubmitting}
            >
              Iniciar sesión
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
