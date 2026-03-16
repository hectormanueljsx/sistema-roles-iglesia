import type { ResponseResult } from '@/shared/types';
import type { Member } from '../domain/member.entity';
import { getMembers } from '../infrastructure/member.repository';

export const getMembersUseCase = async (): Promise<ResponseResult<Member[]>> => {
  return await getMembers();
};
