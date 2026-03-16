import { createClient } from '@/shared/supabase/client';

export const signIn = async (email: string, password: string) => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: error.message };
  }

  const { data: profile } = await supabase.from('profiles').select('*').eq('id', data.user.id).single();

  if (profile && !profile.active) {
    await supabase.auth.signOut();
    return { error: 'Usuario inactivo. Contacte al administrador' };
  }

  return { data, profile };
};

export const signOut = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
};
