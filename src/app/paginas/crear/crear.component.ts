import { Component } from '@angular/core';
import { Abonado } from '../../interfaces/abonado';
import { FirestoreService } from '../../servicios/firestore.service';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {

  regexNum = /0-9/g;

  crearForm= new FormGroup({
    identificador: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z0-9 ]*')]),
    cel: new FormControl('', [Validators.required, Validators.pattern('[0-9-]*')]),
    fecha: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]*')]),
    pon: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')])
  });

  mensajeCrear = "";

  constructor(public listadoFireServ : FirestoreService) {}

  ngOnInit(): void {}

  crearAbon(){
    if( this.crearForm.controls['identificador']?.errors ){
      this.mensajeCrear = "Error en el nro de ID.";
    }else
    if( this.crearForm.controls['descripcion']?.errors ){
      this.mensajeCrear = "Error en la descripcion."
    }else
    if( this.crearForm.controls['cel']?.errors ){
      this.mensajeCrear = "Error en el nro de Celular."
    }else
    if( this.crearForm.controls['fecha']?.errors ){
      this.mensajeCrear = "Error en la fecha."
    }else
    if( this.crearForm.controls['pon']?.errors ){
      this.mensajeCrear = "Error en el nro Pon."
    }
    else{
      this.mensajeCrear = ''
    
    const nuevoAbonado: any = {
      identificador: this.crearForm.value.identificador,
      descripcion: this.crearForm.value.descripcion,
      fecha: this.crearForm.value.fecha,
      pon: this.crearForm.value.pon,
      cel: this.crearForm.value.cel,
      pagoEnero: "",
      pagoFebrero: "",
      pagoMarzo: "",
      pagoAbril: "",
      pagoMayo: "",
      pagoJunio: "",
      pagoJulio: "",
      pagoAgosto: "",
      pagoSeptiembre: "",
      pagoOctubre: "",
      pagoNoviembre: "",
      pagoDiciembre: ""
    }      
 
    this.listadoFireServ.crearDatos(nuevoAbonado)
    this.crearForm.reset();
  }
}

}
