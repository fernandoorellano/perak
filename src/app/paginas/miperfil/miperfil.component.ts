import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-miperfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './miperfil.component.html',
  styleUrl: './miperfil.component.css'
})
export class MiperfilComponent {
  
  valores: any;

  constructor(public authServ: AuthService){}

  ngOnInit(): void {
    this.authServ.obtenerDatos();
  }

}
