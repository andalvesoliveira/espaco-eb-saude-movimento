import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent {
  schedulingForm: FormGroup;

  services = [
    { id: 1, name: 'Fisioterapia Ortopédica' },
    { id: 2, name: 'Pilates Solo' },
    { id: 3, name: 'Massagem Relaxante' }
  ];

  professionals = [
    { id: 1, name: 'Dr. Ana Silva' },
    { id: 2, name: 'Dr. Carlos Mendes' },
    { id: 3, name: 'Dra. Juliana Oliveira' }
  ];

  availableTimes = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

  constructor(private fb: FormBuilder) {
    this.schedulingForm = this.fb.group({
      service: ['', Validators.required],
      professional: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      notes: ['']
    });
  }

  onSubmit() {
    if (this.schedulingForm.valid) {
      console.log('Agendamento realizado:', this.schedulingForm.value);
      // Aqui você faria a chamada para a API de agendamento
    }
  }
}