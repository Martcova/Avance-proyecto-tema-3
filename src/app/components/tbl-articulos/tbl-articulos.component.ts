import { Component,OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-tbl-articulos',
  templateUrl: './tbl-articulos.component.html',
  styleUrls: ['./tbl-articulos.component.css']
})
export class TblArticulosComponent implements  OnDestroy,OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();
  articulos:any;
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
      }
     
    };
   this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  
  
}
