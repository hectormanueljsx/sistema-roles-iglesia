import { redirect } from 'next/navigation';
import { getSession } from '@/modules/auth/infrastructure/auth.server.repository';

export default async function Page() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  redirect('/dashboard');
}
