import { redirect } from 'next/navigation';

import { getSession } from '@/modules/auth/infrastructure/auth.server.repository';
import { Sidebar } from '@/shared/components/Sidebar';

export default async function SystemLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className='bg-white'>
      <Sidebar>{children}</Sidebar>
    </div>
  );
}
