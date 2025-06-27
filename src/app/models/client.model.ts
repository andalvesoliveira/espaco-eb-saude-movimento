export interface Client {
  id?: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  address: string;
  createdAt?: Date;
}