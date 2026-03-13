import { redirect } from 'next/navigation';

import { getSession } from '@/modules/auth/infrastructure/auth.server.repository';
import { LoginForm } from '@/modules/auth/presentation/LoginForm';

export default async function Page() {
  const session = await getSession();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <section className='min-h-screen flex items-center justify-center p-6 md:p-8'>
      <LoginForm />
    </section>
  );
}
