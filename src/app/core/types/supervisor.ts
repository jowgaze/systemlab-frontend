export interface SupervisorRequest {
  username: string;
  password: string;
  registration: string;
  name: string;
  course: string;
  entryperiod: string;
  status: string;
  role: string;
}

export interface SupervisorResponse {
  id: number;
  username: string;
  registration: string;
  name: string;
  course: string;
  entryperiod: string;
  status: string;
  role: string;
}
