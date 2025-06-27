import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfessionalsComponent } from './pages/professionals/professionals.component';
import { ServicesComponent } from './pages/services/services.component';
import { RegisterComponent } from './pages/register/register.component';
import { SchedulingComponent } from './pages/scheduling/scheduling.component';
import { ConsultComponent } from './pages/consult/consult.component';
import { CancelComponent } from './pages/cancel/cancel.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profissionais', component: ProfessionalsComponent },
  { path: 'servicos', component: ServicesComponent },
  { path: 'cadastro', component: RegisterComponent },
  { path: 'agendamento', component: SchedulingComponent },
  { path: 'consulta', component: ConsultComponent },
  { path: 'cancelamento', component: CancelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }