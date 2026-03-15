import type { Assignment, AssignmentResponse } from '../domain/assignments.entity';
import { createAssignment } from '../infrastructure/assignments.repository';

export const createAssignmentUseCase = async (assignment: Assignment): Promise<AssignmentResponse> => {
  return await createAssignment(assignment);
};
