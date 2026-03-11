import { getMemberById } from '../infrastructure/member.repository';
import type { Member } from '../domain/member.entity';

export const getMemberByIdUseCase = async (id: string): Promise<Member | null> => {
  return await getMemberById(id);
};
