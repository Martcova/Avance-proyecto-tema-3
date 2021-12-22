import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';




@Component({
  selector: 'app-tbl-usuarios',
  templateUrl: './tbl-usuarios.component.html',
  styleUrls: ['./tbl-usuarios.component.css']
})
export class TblUsuariosComponent implements OnDestroy,OnInit {

 usuarios:any;
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();
 
  constructor( private router:Router) { }
  
   
  ngOnInit() :void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
      }
     
    };

    this.dtTrigger.next();
  }

  ngOnDestroy():void {
    this.dtTrigger.unsubscribe();
  }

   editarUsuario(id: any){
     this.router.navigate(['/header/tbl-usuarios/gestion-usuario/',id]);
   }
}
