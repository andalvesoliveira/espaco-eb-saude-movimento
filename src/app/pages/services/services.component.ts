import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      name: 'Fisioterapia Ortopédica',
      description: 'Tratamento de lesões musculoesqueléticas, pós-operatórios e dores crônicas.',
      icon: 'fas fa-bone',
      color: '#b1d3c4',
      duration: '50 min',
      price: '120,00'
    },
    {
      name: 'Pilates Solo',
      description: 'Aulas individuais ou em grupo para melhora da postura, flexibilidade e força.',
      icon: 'fas fa-user',
      color: '#9abfb1',
      duration: '60 min',
      price: '90,00'
    },
    {
      name: 'Massagem Relaxante',
      description: 'Técnicas para alívio do estresse, tensão muscular e promoção do bem-estar.',
      icon: 'fas fa-spa',
      color: '#c6d7d6',
      duration: '60 min',
      price: '110,00'
    },
    {
      name: 'Fisioterapia Neurológica',
      description: 'Reabilitação para pacientes com sequelas de AVC, Parkinson e outras condições neurológicas.',
      icon: 'fas fa-brain',
      color: '#b1d3c4',
      duration: '50 min',
      price: '140,00'
    },
    {
      name: 'Pilates com Acessórios',
      description: 'Uso de acessórios como bola, faixa elástica e rolo para potencializar os exercícios.',
      icon: 'fas fa-dumbbell',
      color: '#9abfb1',
      duration: '60 min',
      price: '100,00'
    },
    {
      name: 'Massagem Terapêutica',
      description: 'Técnicas específicas para tratamento de pontos gatilho e dores musculares.',
      icon: 'fas fa-hand-holding-medical',
      color: '#c6d7d6',
      duration: '60 min',
      price: '130,00'
    }
  ];
}