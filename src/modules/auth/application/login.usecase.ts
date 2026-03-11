import { signIn } from '../infrastructure/auth.repository';

export const loginUseCase = async (email: string, password: string) => {
  return await signIn(email, password);
};
