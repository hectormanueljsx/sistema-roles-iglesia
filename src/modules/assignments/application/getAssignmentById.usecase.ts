import type { AssignmentResponse } from '../domain/assignments.entity';
import { getAssignmentById } from '../infrastructure/assignments.repository';

export const getAssignmentByIdUseCase = async (id: string): Promise<AssignmentResponse> => {
  return getAssignmentById(id);
};
