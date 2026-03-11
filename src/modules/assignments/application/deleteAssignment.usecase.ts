import { deleteAssignment } from '../infrastructure/assignments.repository';
import type { Assignment } from '../domain/assignments.entity';

export const deleteAssignmentUseCase = async (id: string): Promise<Assignment> => {
  return await deleteAssignment(id);
};
