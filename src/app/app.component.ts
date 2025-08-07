import { Component } from '@angular/core';
import { ListadofireService } from './servicios/listadofire.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-ftth';

    constructor(public listadoFireServ : ListadofireService) { }
    
  
    ngOnInit(): void {
      this.listadoFireServ.obtenerDatosAbonado()
    }  
    
}
