import type { Member, MemberResponse } from '../domain/member.entity';
import { createMember } from '../infrastructure/member.repository';

export const createMemberUseCase = async (member: Member): Promise<MemberResponse> => {
  return await createMember(member);
};
