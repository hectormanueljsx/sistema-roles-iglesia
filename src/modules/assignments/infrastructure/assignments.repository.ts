import { createClient } from '@/lib/supabase/client';
import type { Assignment } from '../domain/assignments.entity';

export const getAssignments = async (): Promise<Assignment[]> => {
  const supabase = createClient();
  const { data, error } = await supabase.from('assignments').select('*').order('date', { ascending: true });

  if (error) throw error;
  return data || [];
};

export const createAssignment = async (assignment: Assignment): Promise<Assignment> => {
  const supabase = createClient();
  const { data, error } = await supabase.from('assignments').insert(assignment).select().single();

  if (error) throw error;
  return data;
};

export const updateAssignment = async (id: string, assignment: Partial<Assignment>): Promise<Assignment> => {
  const supabase = createClient();
  const { data, error } = await supabase.from('assignments').update(assignment).eq('id', id).select().single();

  if (error) throw error;
  return data;
};

export const deleteAssignment = async (id: string): Promise<Assignment> => {
  const supabase = createClient();
  const { data, error } = await supabase.from('assignments').delete().eq('id', id).select().single();

  if (error) throw error;
  return data;
};
