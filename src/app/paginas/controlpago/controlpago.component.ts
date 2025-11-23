import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { FechaService } from '../../servicios/fecha.service';
import { ListadofireService } from '../../servicios/listadofire.service';
import { FirestoreService } from '../../servicios/firestore.service';
import { CommonModule } from '@angular/common';
import { ListadoActualesComponent } from '../../componentes/listado-actuales/listado-actuales.component';
import { ListadoFaltantesComponent } from '../../componentes/listado-faltantes/listado-faltantes.component';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-controlpago',
  standalone: true,
  imports: [CommonModule, ListadoActualesComponent, ListadoFaltantesComponent],
  templateUrl: './controlpago.component.html',
  styleUrl: './controlpago.component.css'
})
export class ControlpagoComponent {

  constructor(public listadoFireServ : ListadofireService, 
  public fechaServ: FechaService, public fireServ: FirestoreService,
  public authServ: AuthService) { }
  
  ngOnInit(): void {
    this.fireServ.obtenerDatos();
  }

  enviarMensaje(cel: any){
    let url = environment.inicioTextoUrl+cel+environment.cuerpoTextoUrl;
    window.open(url, "_blank");
  }
  
}
