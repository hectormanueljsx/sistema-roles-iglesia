import type { Member } from '../domain/member.entity';
import { createMember } from '../infrastructure/member.repository';

export const createMemberUseCase = async (member: Member): Promise<Member> => {
  return await createMember(member);
};
