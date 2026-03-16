'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/shared/components/Buttons';
import { Card } from '@/shared/components/Cards';
import { InputText } from '@/shared/components/Inputs';
import type { FormProps } from '@/shared/types';
import { useMemberForm } from '../application/useMemberForm.hook';

export const MemberForm = ({ action = 'create', id }: FormProps) => {
  const router = useRouter();

  const { formik, isLoading } = useMemberForm({ action, memberId: id });

  const { values, handleBlur, setFieldValue, errors, touched, isSubmitting, handleSubmit } = formik;

  if (isLoading) return null;

  return (
    <div className='max-w-170'>
      <Card className='flex flex-col gap-5'>
        <h2 className='font-semibold text-lg'>Información del Miembro</h2>

        <form
          onSubmit={handleSubmit}
          className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'
        >
          <InputText
            name='name'
            label='Nombre'
            value={values.name}
            onValueChange={value => setFieldValue('name', value)}
            onBlur={handleBlur}
            placeholder='Nombre'
            maxLength={25}
            isInvalid={touched.name && !!errors.name}
            errorMessage={touched.name && errors.name}
            isRequired
          />

          <InputText
            name='last_name'
            label='Apellido'
            value={values.last_name}
            onValueChange={value => setFieldValue('last_name', value)}
            onBlur={handleBlur}
            placeholder='Apellido'
            maxLength={25}
            isInvalid={touched.last_name && !!errors.last_name}
            errorMessage={touched.last_name && errors.last_name}
            isRequired
          />

          <InputText
            name='phone'
            label='Teléfono'
            value={values.phone}
            onValueChange={value => setFieldValue('phone', value)}
            onBlur={handleBlur}
            placeholder='Teléfono'
            maxLength={10}
            isInvalid={touched.phone && !!errors.phone}
            errorMessage={touched.phone && errors.phone}
          />

          <div className='col-span-1 flex justify-end gap-4 md:col-span-2 md:gap-6'>
            <Button
              type='button'
              className='min-w-max p-0 bg-transparent'
              onPress={() => router.push('/miembros')}
              isDisabled={isSubmitting}
              color='default'
            >
              Cancelar
            </Button>

            <Button
              type='submit'
              className='w-max'
              isLoading={isSubmitting}
              isDisabled={isSubmitting}
            >
              Guardar
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
