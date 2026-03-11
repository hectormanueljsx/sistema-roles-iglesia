import { deleteMember } from '../infrastructure/member.repository';
import type { Member } from '../domain/member.entity';

export const deleteMemberUseCase = async (id: string): Promise<Member> => {
  return await deleteMember(id);
};
