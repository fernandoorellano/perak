import { Component, OnInit } from '@angular/core';
import { ListadofireService } from 'src/app/servicios/listadofire.service';

@Component({
  selector: 'app-listadofirebase',
  templateUrl: './listadofirebase.component.html',
  styleUrls: ['./listadofirebase.component.css']
})
export class ListadofirebaseComponent implements OnInit {

  constructor(public listadoFireServ : ListadofireService) { }
    
  
    ngOnInit(): void {
      this.listadoFireServ.obtenerDatosAbonado()
    }  
  }
