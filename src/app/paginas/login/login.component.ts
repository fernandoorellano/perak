import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  mensajeLogin = "";
  usuario = '';
  contrasena = '';

  constructor(public authServ: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authServ.obtenerDatos();
  }

  onLogin(){
    this.authServ.getAll().subscribe(res => {
      if(this.usuario == res[0].usuario && this.contrasena == res[0].contrasena){
        
        this.router.navigate(['controlpagos']);
        this.authServ.login = true;
      }else
        if(this.usuario != res[0].usuario && this.contrasena != res[0].contrasena){
          this.mensajeLogin = "Usuario/contraseña incorrecto."
        }else
          if(this.usuario != res[0].usuario && this.contrasena == res[0].contrasena || this.usuario == res[0].usuario && this.contrasena != res[0].contrasena){
            this.mensajeLogin = "Usuario/contraseña incorrecto."
          }
    });
  }
  
}
