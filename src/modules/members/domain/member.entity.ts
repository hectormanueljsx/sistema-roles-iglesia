import type { ResponseResult } from '@/shared/types';

export interface Member {
  id?: string;
  name: string;
  last_name: string;
  phone?: string;
  active?: boolean;
  created_at?: string;
}

export type MemberResponse = ResponseResult<Member>;
