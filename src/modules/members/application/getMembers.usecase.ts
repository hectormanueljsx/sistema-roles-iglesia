import type { Member } from '../domain/member.entity';
import { getMembers } from '../infrastructure/member.repository';

export const getMembersUseCase = async (): Promise<Member[]> => {
  return await getMembers();
};
