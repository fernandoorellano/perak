import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Abonado } from 'src/app/interfaces/abonado';
import { ListadofireService } from 'src/app/servicios/listadofire.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {


   loginForm= new FormGroup({
      descripcion: new FormControl(''),
      fecha: new FormControl(''),
       pon: new FormControl(''),
      pagoMayo: new FormControl(''),
       pagoJunio: new FormControl(''),
      pagoJulio: new FormControl(''),
    });

  constructor(public listadoFireServ : ListadofireService) { }

  ngOnInit(): void {
    this.listadoFireServ.obtenerDatosAbonado();
  }

  onLogin(){
    const nuevoAbonado: Abonado = {
      descripcion: this.loginForm.value.descripcion,
      fecha: this.loginForm.value.fecha,
      pon: this.loginForm.value.pon,
      pagoMayo: this.loginForm.value.pagoMayo,
      pagoJunio: this.loginForm.value.pagoJunio,
      pagoJulio: this.loginForm.value.pagoJulio,
      pagoAgosto: "",
      pagoSeptiembre: "",
      pagoOctubre: "",
      pagoNoviembre: "",
      pagoDiciembre: ""
    }
    this.listadoFireServ.crearAbonado(nuevoAbonado)
    this.loginForm.reset();
  }
}