import { createClient } from '@/shared/supabase/client';
import type { ResponseResult } from '@/shared/types';
import type { Assignment, AssignmentResponse } from '../domain/assignments.entity';

export const getAssignments = async (): Promise<ResponseResult<Assignment[]>> => {
  const supabase = createClient();
  const { data, error } = await supabase.from('assignments').select('*').order('date', { ascending: true });

  if (error) {
    return { error: error.message };
  }

  return { data: data ?? [] };
};

export const getAssignmentById = async (id: string): Promise<AssignmentResponse> => {
  const supabase = createClient();
  const { data, error } = await supabase.from('assignments').select('*').eq('id', id).single();

  if (error) {
    return { error: error.message };
  }

  return { data };
};

export const createAssignment = async (assignment: Assignment): Promise<AssignmentResponse> => {
  const supabase = createClient();
  const { data, error } = await supabase.from('assignments').insert(assignment).select().single();

  if (error) {
    return { error: error.message };
  }

  return { data };
};

export const updateAssignment = async (id: string, assignment: Partial<Assignment>): Promise<AssignmentResponse> => {
  const supabase = createClient();
  const { data, error } = await supabase.from('assignments').update(assignment).eq('id', id).select().single();

  if (error) {
    return { error: error.message };
  }

  return { data };
};

export const deleteAssignment = async (id: string): Promise<AssignmentResponse> => {
  const supabase = createClient();
  const { data, error } = await supabase.from('assignments').delete().eq('id', id).select().single();

  if (error) {
    return { error: error.message };
  }

  return { data };
};
