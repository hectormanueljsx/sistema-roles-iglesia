import type { Member } from '../domain/member.entity';
import { getMemberById } from '../infrastructure/member.repository';

export const getMemberByIdUseCase = async (id: string): Promise<Member | null> => {
  return await getMemberById(id);
};
