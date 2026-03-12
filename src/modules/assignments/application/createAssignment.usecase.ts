import type { Assignment } from '../domain/assignments.entity';
import { createAssignment } from '../infrastructure/assignments.repository';

export const createAssignmentUseCase = async (assignment: Assignment): Promise<Assignment> => {
  return await createAssignment(assignment);
};
