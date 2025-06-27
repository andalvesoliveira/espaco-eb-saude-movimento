import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent {
  consultForm: FormGroup;
  appointments: any[] = [];

  constructor(private fb: FormBuilder) {
    this.consultForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.consultForm.valid) {
      // Simulação de chamada à API
      this.appointments = [
        {
          service: 'Fisioterapia Ortopédica',
          professional: 'Dr. Ana Silva',
          date: '2023-12-15',
          time: '10:00',
          status: 'Confirmado'
        },
        {
          service: 'Pilates Solo',
          professional: 'Dra. Juliana Oliveira',
          date: '2023-12-20',
          time: '15:00',
          status: 'Pendente'
        }
      ];
    }
  }
}