import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent {
  cancelForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cancelForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      appointmentId: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.cancelForm.valid) {
      console.log('Cancelamento solicitado:', this.cancelForm.value);
      // Aqui você faria a chamada para a API de cancelamento
    }
  }
}