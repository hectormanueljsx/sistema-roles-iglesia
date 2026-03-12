import { createClient } from '@/shared/supabase/client';
import type { Member } from '../domain/member.entity';

export const getMembers = async (): Promise<Member[]> => {
  const supabase = createClient();
  const { data, error } = await supabase.from('members').select('*').eq('active', true).order('name');

  if (error) throw error;
  return data || [];
};

export const getMemberById = async (id: string): Promise<Member | null> => {
  const supabase = createClient();
  const { data, error } = await supabase.from('members').select('*').eq('id', id).single();

  if (error) throw error;
  return data;
};

export const createMember = async (member: Member): Promise<Member> => {
  const supabase = createClient();
  const { data, error } = await supabase.from('members').insert(member).select().single();

  if (error) throw error;
  return data;
};

export const updateMember = async (id: string, member: Partial<Member>): Promise<Member> => {
  const supabase = createClient();
  const { data, error } = await supabase.from('members').update(member).eq('id', id).select().single();

  if (error) throw error;
  return data;
};

export const deleteMember = async (id: string): Promise<Member> => {
  const supabase = createClient();
  const { data, error } = await supabase.from('members').update({ active: false }).eq('id', id).select().single();

  if (error) throw error;
  return data;
};
