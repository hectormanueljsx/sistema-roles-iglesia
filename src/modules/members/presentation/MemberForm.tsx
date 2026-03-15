'use client';

import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import * as Yup from 'yup';

import { Button } from '@/shared/components/Buttons';
import { Card } from '@/shared/components/Cards';
import { InputText } from '@/shared/components/Inputs';
import { createMemberUseCase } from '../application/createMember.usecase';
import { getMemberByIdUseCase } from '../application/getMemberById.usecase';
import { updateMemberUseCase } from '../application/updateMember.usecase';
import type { MemberResponse } from '../domain/member.entity';

interface MemberForm {
  action?: string;
  memberId?: string;
}

export const MemberForm = ({ action = 'create', memberId }: MemberForm) => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    last_name: '',
    phone: '',
  });
  const [isLoadingMember, setIsLoadingMember] = useState(true);

  const router = useRouter();

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      name: Yup.string().required('El nombre es obligatorio.'),
      last_name: Yup.string().required('El apellido es obligatorio.'),
      phone: Yup.string().matches(/^\d{10}$/, 'El teléfono debe contener 10 dígitos.'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      let response: MemberResponse;

      if (action === 'update' && memberId) {
        response = await updateMemberUseCase(memberId, values);
      } else {
        response = await createMemberUseCase(values);
      }

      if ('error' in response) {
        toast.error(response.error);
        setSubmitting(false);
        return;
      }

      toast.success(action === 'update' ? 'Miembro actualizado con éxito' : 'Miembro creado con éxito');
      router.push('/miembros');
    },
  });

  useEffect(() => {
    const getMember = async () => {
      if (memberId) {
        const response = await getMemberByIdUseCase(memberId);

        if ('error' in response) {
          router.push('/miembros');
          return;
        }

        setInitialValues({
          name: response.data.name,
          last_name: response.data.last_name,
          phone: response.data.phone || '',
        });
      }
      setIsLoadingMember(false);
    };

    getMember();
  }, [memberId]);

  const { values, handleBlur, setFieldValue, errors, touched, isSubmitting, handleSubmit } = formik;

  if (isLoadingMember) return null;

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
              className='min-w-max p-0'
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
