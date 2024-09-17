export interface SessionResponse {
  id: number;
  status: boolean;
  shift: string;
  laboratoryId: number;
  laboratory: string;
  supervisorId: number;
  supervisor: string;
  course: string;
}
