import type { Assignment } from '../domain/assignments.entity';
import { getAssignments } from '../infrastructure/assignments.repository';

export const getAssignmentsUseCase = async (): Promise<Assignment[]> => {
  return await getAssignments();
};
