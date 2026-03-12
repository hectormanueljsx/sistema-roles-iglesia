import type { User } from '../domain/user.entity';
import { updateUser } from '../infrastructure/user.repository';

export const updateUserUseCase = async (id: string, user: Partial<User>): Promise<User> => {
  return await updateUser(id, user);
};
