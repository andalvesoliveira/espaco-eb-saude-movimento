import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Métodos para profissionais
  getProfessionals() {
    return this.http.get(`${this.apiUrl}/professionals`);
  }

  // Métodos para serviços
  getServices() {
    return this.http.get(`${this.apiUrl}/services`);
  }

  // Métodos para clientes
  registerClient(clientData: any) {
    return this.http.post(`${this.apiUrl}/clients`, clientData);
  }

  // Métodos para agendamentos
  createAppointment(appointmentData: any) {
    return this.http.post(`${this.apiUrl}/appointments`, appointmentData);
  }

  getClientAppointments(clientId: string) {
    return this.http.get(`${this.apiUrl}/appointments?clientId=${clientId}`);
  }

  cancelAppointment(appointmentId: string, reason: string) {
    return this.http.delete(`${this.apiUrl}/appointments/${appointmentId}`, { body: { reason } });
  }
}