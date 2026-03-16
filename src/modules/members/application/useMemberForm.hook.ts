import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import * as Yup from 'yup';

import { createMemberUseCase } from '../application/createMember.usecase';
import { getMemberByIdUseCase } from '../application/getMemberById.usecase';
import { updateMemberUseCase } from '../application/updateMember.usecase';
import type { MemberResponse } from '../domain/member.entity';

interface UseMemberFormOptions {
  action?: string;
  memberId?: string;
}

export const useMemberForm = ({ action = 'create', memberId }: UseMemberFormOptions) => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    last_name: '',
    phone: '',
  });
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      name: Yup.string().required('El nombre es obligatorio'),
      last_name: Yup.string().required('El apellido es obligatorio'),
      phone: Yup.string().matches(/^\d{10}$/, 'El teléfono debe contener 10 dígitos'),
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
      setIsLoading(false);
    };

    getMember();
  }, [memberId]);

  return {
    formik,
    isLoading,
  };
};
