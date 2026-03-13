import { signIn } from '../infrastructure/auth.client.repository';

export const loginUseCase = async (email: string, password: string) => {
  return await signIn(email, password);
};
