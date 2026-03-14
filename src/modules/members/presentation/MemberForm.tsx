'use client';

import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import * as Yup from 'yup';

import { Button } from '@/shared/components/Buttons';
import { Card } from '@/shared/components/Cards';
import { InputTel, InputText } from '@/shared/components/Inputs';
import { createMemberUseCase } from '../application/createMember.usecase';

export const MemberForm = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: '',
      last_name: '',
      phone: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('El nombre es obligatorio.'),
      last_name: Yup.string().required('El apellido es obligatorio.'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      const response = await createMemberUseCase(values);

      if (response.error) {
        toast.error(response.error);
        setSubmitting(false);
        return;
      }

      router.push('/miembros');
    },
  });

  const { values, handleBlur, setFieldValue, errors, touched, isSubmitting, handleSubmit } = formik;

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
            isInvalid={touched.last_name && !!errors.last_name}
            errorMessage={touched.last_name && errors.last_name}
            isRequired
          />

          <InputTel
            name='phone'
            label='Teléfono'
            value={values.phone}
            onValueChange={value => setFieldValue('phone', value)}
            onBlur={handleBlur}
            placeholder='Teléfono'
          />

          <div className='col-span-1 flex justify-end gap-4 md:col-span-2 md:gap-6'>
            <Button
              type='button'
              className='min-w-max p-0'
              onPress={() => router.push('/miembros')}
              color='default'
            >
              Cancelar
            </Button>

            <Button
              type='submit'
              className='w-max'
              isLoading={isSubmitting}
            >
              Guardar
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
