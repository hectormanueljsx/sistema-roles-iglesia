import type { Assignment, AssignmentResponse } from '../domain/assignments.entity';
import { updateAssignment } from '../infrastructure/assignments.repository';

export const updateAssignmentUseCase = async (
  id: string,
  assignment: Partial<Assignment>,
): Promise<AssignmentResponse> => {
  return await updateAssignment(id, assignment);
};
