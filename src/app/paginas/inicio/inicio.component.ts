import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { CommonModule } from '@angular/common';
import { ListadofirebaseComponent } from '../../componentes/listadofirebase/listadofirebase.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, ListadofirebaseComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  valorEnv = environment.api;

  constructor(){}

  ngOnInit(): void {}

}
