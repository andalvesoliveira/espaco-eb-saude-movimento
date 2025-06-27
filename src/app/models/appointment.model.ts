export interface Appointment {
  id: string;
  clientId: string;
  serviceId: string;
  professionalId: string;
  date: Date;
  time: string;
  status: 'Confirmado' | 'Pendente' | 'Cancelado';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}