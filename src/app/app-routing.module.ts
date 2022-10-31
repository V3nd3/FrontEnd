import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEducacionComponent } from './Componentes/educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './Componentes/educacion/nueva-educacion.component';
import { EditarExpComponent } from './Componentes/experiencia/editar-exp.component';
import { NuevaExperienciaComponent } from './Componentes/experiencia/nueva-experiencia.component';
import { EditarHabComponent } from './Componentes/habilidades/editar-hab.component';
import { NuevaHabComponent } from './Componentes/habilidades/nueva-hab.component';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'AgregarExp', component: NuevaExperienciaComponent},
  {path: 'EditarExp/:id', component: EditarExpComponent},
  {path: 'AgregarEdu', component: NuevaEducacionComponent},
  {path: 'EditarEdu/:id', component: EditarEducacionComponent},
  {path: 'NuevaHabilidad', component: NuevaHabComponent},
  {path: 'EditarHabilidad/:id', component: EditarHabComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
