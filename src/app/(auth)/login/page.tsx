import { AuthForm } from '@/modules/auth/presentation/AuthForm.component';

export default async function Page() {
  return (
    <section className='min-h-screen flex items-center justify-center p-6 md:p-8'>
      <AuthForm />
    </section>
  );
}
