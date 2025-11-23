import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { FechaService } from '../../servicios/fecha.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-faltantes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-faltantes.component.html',
  styleUrl: './listado-faltantes.component.css'
})
export class ListadoFaltantesComponent {

  constructor(public fechaServ: FechaService) { }

  ngOnInit(): void {
  }

  enviarMensaje(cel: string){
    let url = environment.inicioTextoUrl+cel+environment.cuerpoTextoUrl;
    window.open(url, "_blank");
  }
  
}
