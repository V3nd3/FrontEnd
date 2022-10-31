import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './Componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './Componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { HabilidadesComponent } from './Componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from '../service/interceptor';
import { NuevaExperienciaComponent } from './Componentes/experiencia/nueva-experiencia.component';
import { EditarExpComponent } from './Componentes/experiencia/editar-exp.component';
import { NuevaEducacionComponent } from './Componentes/educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './Componentes/educacion/editar-educacion.component';
import { EditarHabComponent } from './Componentes/habilidades/editar-hab.component';
import { NuevaHabComponent } from './Componentes/habilidades/nueva-hab.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    NuevaExperienciaComponent,
    EditarExpComponent,
    NuevaEducacionComponent,
    EditarEducacionComponent,
    EditarHabComponent,
    NuevaHabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
