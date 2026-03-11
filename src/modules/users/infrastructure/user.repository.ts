import { createClient } from '@/lib/supabase/client';
import { createAdminClient } from '@/lib/supabase/server';
import type { User } from '../domain/user.entity';

export const getUsers = async (): Promise<User[]> => {
  const supabase = createClient();
  const { data, error } = await supabase.from('profiles').select('*').order('full_name');

  if (error) throw error;
  return data || [];
};

export const createUser = async (email: string, password: string, userData: Partial<User>) => {
  const supabase = createAdminClient();

  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: {
      full_name: userData.full_name,
      role: userData.role,
    },
  });

  if (error) throw error;
  return data.user;
};

export const updateUser = async (id: string, user: Partial<User>): Promise<User> => {
  const supabase = createClient();
  const { data, error } = await supabase.from('profiles').update(user).eq('id', id).select().single();

  if (error) throw error;
  return data;
};
