import type { User } from '../domain/user.entity';
import { getUsers } from '../infrastructure/user.repository';

export const getUsersUseCase = async (): Promise<User[]> => {
  return await getUsers();
};
