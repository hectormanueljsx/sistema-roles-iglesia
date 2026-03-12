import type { Assignment } from '../domain/assignments.entity';
import { deleteAssignment } from '../infrastructure/assignments.repository';

export const deleteAssignmentUseCase = async (id: string): Promise<Assignment> => {
  return await deleteAssignment(id);
};
