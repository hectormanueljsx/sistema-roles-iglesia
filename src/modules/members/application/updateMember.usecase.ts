import type { Member, MemberResponse } from '../domain/member.entity';
import { updateMember } from '../infrastructure/member.repository';

export const updateMemberUseCase = async (id: string, member: Partial<Member>): Promise<MemberResponse> => {
  return await updateMember(id, member);
};
