import { createServerClient } from '@/shared/supabase/server';
import type { AuthUser } from '../domain/auth.entity';

export const getSession = async () => {
  const supabase = await createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session;
};

export const getCurrentUser = async (): Promise<AuthUser | null> => {
  const supabase = await createServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single();

  return profile;
};
