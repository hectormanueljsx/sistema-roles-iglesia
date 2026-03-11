import { createAssignment } from '../infrastructure/assignments.repository';
import type { Assignment } from '../domain/assignments.entity';

export const createAssignmentUseCase = async (assignment: Assignment): Promise<Assignment> => {
  return await createAssignment(assignment);
};
