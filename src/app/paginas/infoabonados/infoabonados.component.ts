import { Component } from '@angular/core';
import { FechaService } from '../../servicios/fecha.service';
import { FirestoreService } from '../../servicios/firestore.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-infoabonados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infoabonados.component.html',
  styleUrl: './infoabonados.component.css'
})
export class InfoabonadosComponent {

   constructor( 
    public fechaServ: FechaService, public fireServ: FirestoreService) { }

  ngOnInit(): void {
    this.fireServ.obtenerDatos();
  }

}
