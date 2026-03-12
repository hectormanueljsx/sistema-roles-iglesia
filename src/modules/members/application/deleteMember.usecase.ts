import type { Member } from '../domain/member.entity';
import { deleteMember } from '../infrastructure/member.repository';

export const deleteMemberUseCase = async (id: string): Promise<Member> => {
  return await deleteMember(id);
};
