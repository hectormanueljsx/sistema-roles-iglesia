import type { ResponseResult } from '@/shared/types';

export type ServiceType = 'aseo' | 'cafe' | 'flores' | 'clases';
export type ShiftType = 'manana' | 'tarde';

export type Assignment = {
  id?: string;
  member_id: string;
  date: string;
  service_type: ServiceType;
  shift: ShiftType;
  class_name?: string;
  created_at?: string;
};

export type AssignmentResponse = ResponseResult<Assignment>;
