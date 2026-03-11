import { updateMember } from '../infrastructure/member.repository';
import type { Member } from '../domain/member.entity';

export const updateMemberUseCase = async (id: string, member: Partial<Member>): Promise<Member> => {
  return await updateMember(id, member);
};
