import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import * as Yup from 'yup';

import { getMembersUseCase } from '@/modules/members/application/getMembers.usecase';
import type { SelectOptions } from '@/shared/types';
import type { AssignmentResponse, ServiceType, ShiftType } from '../domain/assignments.entity';
import { createAssignmentUseCase } from './createAssignment.usecase';
import { getAssignmentByIdUseCase } from './getAssignmentById.usecase';
import { updateAssignmentUseCase } from './updateAssignment.usecase';

interface UseAssignmentFormOptions {
  action?: string;
  assignmentId?: string;
}

export const useAssignmentForm = ({ action = 'create', assignmentId }: UseAssignmentFormOptions) => {
  const [initialValues, setInitialValues] = useState({
    member_id: '',
    service_type: '' as ServiceType,
    date: '',
    shift: '' as ShiftType,
    class_name: '',
  });
  const [members, setMembers] = useState<SelectOptions[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      member_id: Yup.string().required('El miembro es obligatorio'),
      service_type: Yup.string().required('El tipo de servicio es obligatorio'),
      date: Yup.string()
        .required('La fecha de servicio es obligatoria')
        .matches(/^\d{4}-\d{2}-\d{2}$/, 'Formato de fecha inválido')
        .test('valid-year', 'Formato de fecha inválido', value => {
          if (!value) return false;
          const year = Number(value.split('-')[0]);
          return year >= 1900 && year <= 2100;
        }),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      let response: AssignmentResponse;

      if (action === 'update' && assignmentId) {
        response = await updateAssignmentUseCase(assignmentId, values);
      } else {
        response = await createAssignmentUseCase(values);
      }

      if ('error' in response) {
        toast.error(response.error);
        setSubmitting(false);
        return;
      }

      toast.success(action === 'update' ? 'Asignación actualizada con éxito' : 'Asignación creada con éxito');
      router.push('/asignaciones');
    },
  });

  useEffect(() => {
    const init = async () => {
      const [membersResponse, assignmentResponse] = await Promise.all([
        getMembersUseCase(),
        assignmentId ? getAssignmentByIdUseCase(assignmentId) : Promise.resolve(null),
      ]);

      if ('data' in membersResponse) {
        const memberOptions = membersResponse.data.map(member => ({
          key: member.id || '',
          label: `${member.name} ${member.last_name}`,
        }));
        setMembers(memberOptions);
      }

      if (assignmentResponse) {
        if ('error' in assignmentResponse) {
          router.push('/asignaciones');
          return;
        }

        setInitialValues({
          member_id: assignmentResponse.data.member_id,
          service_type: assignmentResponse.data.service_type,
          date: assignmentResponse.data.date,
          shift: assignmentResponse.data.shift,
          class_name: assignmentResponse.data.class_name || '',
        });
      }

      setIsLoading(false);
    };

    init();
  }, [assignmentId]);

  return {
    formik,
    isLoading,
    members,
  };
};
