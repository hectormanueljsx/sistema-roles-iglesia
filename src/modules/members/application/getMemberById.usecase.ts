import type { MemberResponse } from '../domain/member.entity';
import { getMemberById } from '../infrastructure/member.repository';

export const getMemberByIdUseCase = async (id: string): Promise<MemberResponse> => {
  return getMemberById(id);
};
