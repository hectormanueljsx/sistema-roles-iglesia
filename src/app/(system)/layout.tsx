import { redirect } from 'next/navigation';

import { getCurrentUser, getSession } from '@/modules/auth/infrastructure/auth.server.repository';
import { UserProvider } from '@/providers';
import { Sidebar } from '@/shared/components/Sidebar';

export default async function SystemLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  const user = await getCurrentUser();

  if (!session) {
    redirect('/login');
  }

  return (
    <UserProvider initialUser={user}>
      <div className='bg-(--color-background)'>
        <Sidebar>{children}</Sidebar>
      </div>
    </UserProvider>
  );
}
