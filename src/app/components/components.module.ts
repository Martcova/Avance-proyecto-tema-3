import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { DataTablesModule } from "angular-datatables";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TblArticulosComponent } from './tbl-articulos/tbl-articulos.component';
import { TblComentariosComponent } from './tbl-comentarios/tbl-comentarios.component';
import { TblUsuariosComponent } from './tbl-usuarios/tbl-usuarios.component';
import { GestionUsuarioComponent } from './gestion-usuario/gestion-usuario.component';
import { AgregaArticuloComponent } from './agrega-articulo/agrega-articulo.component';


@NgModule({
  declarations: [
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    TblArticulosComponent,
    TblComentariosComponent,
    TblUsuariosComponent,
    GestionUsuarioComponent,
    AgregaArticuloComponent 
  ],
  imports: [
    CommonModule,
    RouterModule,
    DataTablesModule
   
  ]
})
export class ComponentsModule { }
