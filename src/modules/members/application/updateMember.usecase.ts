import type { Member } from '../domain/member.entity';
import { updateMember } from '../infrastructure/member.repository';

export const updateMemberUseCase = async (id: string, member: Partial<Member>): Promise<Member> => {
  return await updateMember(id, member);
};
