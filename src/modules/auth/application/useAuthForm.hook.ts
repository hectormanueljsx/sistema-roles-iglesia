import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import * as Yup from 'yup';

import { loginUseCase } from '../application/login.usecase';

export const useAuthForm = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Ingresa un correo electrónico válido')
        .required('El correo electrónico es obligatorio'),
      password: Yup.string()
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .required('La contraseña es obligatoria'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      const response = await loginUseCase(values.email, values.password);

      if (response.error) {
        toast.error(response.error);
        setSubmitting(false);
        return;
      }

      router.push('/resumen');
    },
  });

  return {
    formik,
  };
};
