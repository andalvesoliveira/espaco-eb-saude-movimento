import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfessionalsComponent } from './pages/professionals/professionals.component';
import { ServicesComponent } from './pages/services/services.component';
import { RegisterComponent } from './pages/register/register.component';
import { SchedulingComponent } from './pages/scheduling/scheduling.component';
import { ConsultComponent } from './pages/consult/consult.component';
import { CancelComponent } from './pages/cancel/cancel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfessionalsComponent,
    ServicesComponent,
    RegisterComponent,
    SchedulingComponent,
    ConsultComponent,
    CancelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }