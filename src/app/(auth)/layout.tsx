import { redirect } from 'next/navigation';

import { getSession } from '@/modules/auth/infrastructure/auth.server.repository';

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  if (session) {
    redirect('/resumen');
  }

  return (
    <div className='bg-(--color-background)'>
      <main>{children}</main>
    </div>
  );
}
