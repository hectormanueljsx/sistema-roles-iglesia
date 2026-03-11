export type Role = 'admin' | 'editor';

export interface User {
  id?: string;
  full_name: string;
  role: Role;
  active?: boolean;
  created_at?: string;
}
