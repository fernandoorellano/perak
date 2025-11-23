import { Component } from '@angular/core';
import { FirestoreService } from '../../servicios/firestore.service';
import { FechaService } from '../../servicios/fecha.service';
import { ModalComponent } from '../../componentes/modal/modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListadoActualesComponent } from '../../componentes/listado-actuales/listado-actuales.component';
import { ListadoFaltantesComponent } from '../../componentes/listado-faltantes/listado-faltantes.component';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-edicion',
  standalone: true,
  imports: [ModalComponent, EdicionComponent, CommonModule, FormsModule, ListadoActualesComponent, ListadoFaltantesComponent],
  templateUrl: './edicion.component.html',
  styleUrl: './edicion.component.css'
})
export class EdicionComponent {
    fecha: any;

   constructor(public fireServ : FirestoreService, public fechaServ: FechaService, public authServ: AuthService) { }
   
  ngOnInit(): void {
    this.fireServ.obtenerDatos()
  }

  guardarDatos(datos: any){
    this.reiniciarDatos();
    this.fireServ.datosAbonado.push(datos);
  }

  reiniciarDatos(){
    this.fireServ.datosAbonado = [];
  }

}
