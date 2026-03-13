import { LoginForm } from '@/modules/auth/presentation/LoginForm';

export default function Page() {
  return (
    <section className='min-h-screen flex items-center justify-center p-6 md:p-8'>
      <LoginForm />
    </section>
  );
}
