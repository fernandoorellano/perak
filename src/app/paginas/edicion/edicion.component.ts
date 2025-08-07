import { Component, OnInit } from '@angular/core';
import { ListadofireService } from 'src/app/servicios/listadofire.service';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

   constructor(public listadoFireServ : ListadofireService) { }
      
    
      ngOnInit(): void {
        this.listadoFireServ.obtenerDatosAbonado()
      }

}
