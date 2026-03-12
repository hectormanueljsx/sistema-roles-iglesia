import type { User } from '../domain/user.entity';
import { createUser } from '../infrastructure/user.repository';

export const createUserUseCase = async (email: string, password: string, user: Partial<User>) => {
  return await createUser(email, password, user);
};
