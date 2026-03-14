export interface Member {
  id?: string;
  name: string;
  last_name: string;
  phone?: string;
  active?: boolean;
  created_at?: string;
}

export interface MemberResponse {
  data?: Member;
  error?: string;
}
