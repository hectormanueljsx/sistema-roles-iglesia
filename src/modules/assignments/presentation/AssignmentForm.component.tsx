'use client';

import { parseDate } from '@internationalized/date';
import { useRouter } from 'next/navigation';
import type { Key } from 'react';

import { Button } from '@/shared/components/Buttons';
import { Card } from '@/shared/components/Cards';
import { InputAutocomplete, InputDatePicker, InputSelect, InputTextArea } from '@/shared/components/Inputs';
import type { FormProps } from '@/shared/types';
import { SERVICE_TYPE_OPTIONS, SHIFT_TYPE_OPTIONS } from '@/shared/utils/constants';
import { useAssignmentForm } from '../application/useAssignmentForm.hook';

export const AssignmentForm = ({ action = 'create', id }: FormProps) => {
  const router = useRouter();

  const { formik, isLoading, members } = useAssignmentForm({ action, assignmentId: id });

  const { values, handleBlur, setFieldValue, setFieldTouched, errors, touched, isSubmitting, handleSubmit } = formik;

  if (isLoading) return null;

  return (
    <div className='max-w-170'>
      <Card className='flex flex-col gap-5'>
        <h2 className='font-semibold text-lg'>Información de la Asignación</h2>

        <form
          onSubmit={handleSubmit}
          className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'
        >
          <InputAutocomplete
            name='member_id'
            label='Miembro'
            selectedKey={values.member_id || null}
            onSelectionChange={(key: Key | null) => {
              setFieldValue('member_id', key?.toString() ?? '');
            }}
            items={members}
            onBlur={handleBlur}
            isClearable={false}
            isInvalid={touched.member_id && !!errors.member_id}
            errorMessage={touched.member_id && errors.member_id}
            isRequired
          />

          <InputSelect
            name='service_type'
            label='Tipo de servicio'
            selectedKeys={values.service_type ? [values.service_type] : []}
            onSelectionChange={keys => {
              const value = Array.from(keys)[0] as string;
              setFieldValue('service_type', value);

              if (value !== 'clases') setFieldValue('class_name', '');
            }}
            items={SERVICE_TYPE_OPTIONS}
            onBlur={handleBlur}
            isInvalid={touched.service_type && !!errors.service_type}
            errorMessage={touched.service_type && errors.service_type}
            isRequired
          />

          <InputDatePicker
            name='date'
            label='Fecha de servicio'
            value={values.date ? parseDate(values.date) : null}
            onChange={value => setFieldValue('date', value?.toString())}
            onBlur={() => setFieldTouched('date', true)}
            showMonthAndYearPickers
            isInvalid={touched.date && !!errors.date}
            errorMessage={touched.date && errors.date}
            isRequired
          />

          <InputSelect
            name='shift'
            label='Tipo de turno'
            selectedKeys={values.shift ? [values.shift] : []}
            onSelectionChange={keys => {
              const value = Array.from(keys)[0] as string;
              setFieldValue('shift', value);
            }}
            items={SHIFT_TYPE_OPTIONS}
            onBlur={handleBlur}
            isInvalid={touched.shift && !!errors.shift}
            errorMessage={touched.shift && errors.shift}
            isRequired
          />

          <div className='col-span-1 md:col-span-2'>
            {values.service_type === 'clases' && (
              <InputTextArea
                name='class_name'
                label='Nombre de la clase'
                value={values.class_name}
                onValueChange={value => setFieldValue('class_name', value)}
                onBlur={handleBlur}
                placeholder='Nombre de la clase'
                isInvalid={touched.class_name && !!errors.class_name}
                errorMessage={touched.class_name && errors.class_name}
              />
            )}
          </div>

          <div className='col-span-1 flex justify-end gap-4 md:col-span-2 md:gap-6'>
            <Button
              type='button'
              className='min-w-max p-0 bg-transparent'
              onPress={() => router.push('/asignaciones')}
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
