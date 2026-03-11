import { getAssignments } from '../infrastructure/assignments.repository';
import type { Assignment } from '../domain/assignments.entity';

export const getAssignmentsUseCase = async (): Promise<Assignment[]> => {
  return await getAssignments();
};
