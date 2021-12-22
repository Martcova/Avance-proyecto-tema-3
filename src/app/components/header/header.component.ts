import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from '../../cargar-scripts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _CargarScripts:CargarScriptsService) {
    _CargarScripts.carga("../assets/headercomplement.js");
   }

  ngOnInit(): void {
         
    
  }

  

}