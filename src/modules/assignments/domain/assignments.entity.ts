export type ServiceType = 'aseo' | 'cafe' | 'flores' | 'clase';

export interface Assignment {
  id?: string;
  member_id: string;
  date: string;
  service_type: ServiceType;
  class_name?: string;
  created_at?: string;
}
