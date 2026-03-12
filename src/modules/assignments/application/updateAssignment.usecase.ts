import type { Assignment } from '../domain/assignments.entity';
import { updateAssignment } from '../infrastructure/assignments.repository';

export const updateAssignmentUseCase = async (id: string, assignment: Partial<Assignment>): Promise<Assignment> => {
  return await updateAssignment(id, assignment);
};
