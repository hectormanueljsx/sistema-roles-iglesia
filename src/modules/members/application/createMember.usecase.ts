import { createMember } from '../infrastructure/member.repository';
import type { Member } from '../domain/member.entity';

export const createMemberUseCase = async (member: Member): Promise<Member> => {
  return await createMember(member);
};
