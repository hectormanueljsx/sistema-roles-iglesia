import { createUser } from '../infrastructure/user.repository';
import type { User } from '../domain/user.entity';

export const createUserUseCase = async (email: string, password: string, user: Partial<User>) => {
  return await createUser(email, password, user);
};
