import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { FechaService } from '../../servicios/fecha.service';

@Component({
  selector: 'app-listado-actuales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-actuales.component.html',
  styleUrl: './listado-actuales.component.css'
})
export class ListadoActualesComponent {

  constructor(public fechaServ: FechaService) { }

  ngOnInit(): void {
  }

  enviarMensaje(cel: string){
    let url = environment.inicioTextoUrl+cel+environment.cuerpoTextoUrl;
    window.open(url, "_blank");
  }
}
