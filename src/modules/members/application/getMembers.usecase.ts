import { getMembers } from '../infrastructure/member.repository';
import type { Member } from '../domain/member.entity';

export const getMembersUseCase = async (): Promise<Member[]> => {
  return await getMembers();
};
