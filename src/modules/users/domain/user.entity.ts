export type Role = 'admin' | 'editor';

export type User = {
  id?: string;
  full_name: string;
  role: Role;
  active?: boolean;
  created_at?: string;
};
