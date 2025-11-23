import { Component } from '@angular/core';
import { FechaService } from '../../servicios/fecha.service';
import { FirestoreService } from '../../servicios/firestore.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listadofirebase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listadofirebase.component.html',
  styleUrl: './listadofirebase.component.css'
})
export class ListadofirebaseComponent {

  constructor(public fireServ : FirestoreService, public fechaServ: FechaService) { }
  
  ngOnInit(): void {
    this.fireServ.obtenerDatos()
  }  
}
