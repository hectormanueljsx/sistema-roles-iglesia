import { redirect } from 'next/navigation';

import { getSession } from '@/modules/auth/infrastructure/auth.server.repository';

export default async function SystemLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className='bg-white'>
      <main>{children}</main>
    </div>
  );
}
