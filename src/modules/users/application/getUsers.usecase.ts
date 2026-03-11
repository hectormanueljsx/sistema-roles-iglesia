import { getUsers } from '../infrastructure/user.repository';
import type { User } from '../domain/user.entity';

export const getUsersUseCase = async (): Promise<User[]> => {
  return await getUsers();
};
