import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TblArticulosComponent } from './components/tbl-articulos/tbl-articulos.component';
import { TblComentariosComponent } from './components/tbl-comentarios/tbl-comentarios.component';
import { TblUsuariosComponent } from './components/tbl-usuarios/tbl-usuarios.component';
import { GestionUsuarioComponent } from './components/gestion-usuario/gestion-usuario.component';
import { AgregaArticuloComponent } from './components/agrega-articulo/agrega-articulo.component';

const routes: Routes = [
  { path:'', component:InicioComponent},
  { path:'header/register', component:RegisterComponent},
  { path:'header/login', component:LoginComponent},
  { path:'header/tbl-articulos', component:TblArticulosComponent},
  { path:'header/tbl-comentarios', component:TblComentariosComponent},
  { path:'header/tbl-usuarios', component:TblUsuariosComponent},
  { path:'header/tbl-usuarios/gestion-usuario/:id', component:GestionUsuarioComponent},
  { path:'header/tbl-articulos/agrega-articulo', component:AgregaArticuloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
