import type { MemberResponse } from '../domain/member.entity';
import { deleteMember } from '../infrastructure/member.repository';

export const deleteMemberUseCase = async (id: string): Promise<MemberResponse> => {
  return await deleteMember(id);
};
