import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroCreateComponent } from './components/registro/registro-create/registro-create/registro-create.component';
import { RegistroComponent } from './components/registro/registro/registro.component';
import { ValidarRegComponent } from './components/validar/validar-reg/validar-reg.component';

const routes: Routes = [
  { path: 'registrar', component: RegistroCreateComponent },
  { path: 'registros', component: RegistroComponent },
  { path: 'validar', component: ValidarRegComponent },
  { path: '', redirectTo: 'registrar', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
