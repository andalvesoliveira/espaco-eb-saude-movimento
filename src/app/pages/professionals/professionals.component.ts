import { Component } from '@angular/core';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.css']
})
export class ProfessionalsComponent {
  professionals = [
    {
      name: 'Dra. Erica Becker',
      specialty: 'Fisioterapeuta',
      description: 'Especialista em reabilitação musculoesquelética com 10 anos de experiência.',
      services: ['Fisioterapia', 'Pilates'],
      image: 'assets/images/professional1.jpg'
    },
    {
      name: 'Dra. Erica Becker',
      specialty: 'Fisioterapeuta e Massoterapeuta',
      description: 'Especializado em técnicas de liberação miofascial e terapia manual.',
      services: ['Fisioterapia', 'Massoterapia'],
      image: 'assets/images/professional2.jpg'
    },
    {
      name: 'Dra. Erica Becker',
      specialty: 'Instrutora de Pilates',
      description: 'Certificada em Pilates Clínico e Pilates para gestantes.',
      services: ['Pilates'],
      image: 'assets/images/professional3.jpg'
    }
  ];
}