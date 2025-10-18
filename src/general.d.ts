export interface ITreatment {
  id: number;
  name: string;
  code: string | null;
  description?: string | null;
  price: number;
  duration: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
}
