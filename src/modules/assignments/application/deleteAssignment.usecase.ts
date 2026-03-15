import type { AssignmentResponse } from '../domain/assignments.entity';
import { deleteAssignment } from '../infrastructure/assignments.repository';

export const deleteAssignmentUseCase = async (id: string): Promise<AssignmentResponse> => {
  return await deleteAssignment(id);
};
