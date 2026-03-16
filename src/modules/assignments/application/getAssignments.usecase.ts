import type { ResponseResult } from '@/shared/types';
import type { Assignment } from '../domain/assignments.entity';
import { getAssignments } from '../infrastructure/assignments.repository';

export const getAssignmentsUseCase = async (): Promise<ResponseResult<Assignment[]>> => {
  return await getAssignments();
};
