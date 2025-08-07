import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FechaService {

  fecha : any = new Date();
  fechaDiaActualNumerica = this.fecha.getDate();

  mensajePagoActual : any = [];
  mensajePagoAnteriores : any = [];
  mensajePagoFuturo: any = [];



  mensajePagoDosDias : any = [];
  mensajePagoTresDias : any = []; 

  constructor() { }

  calculoDiaRestante(datos: any){
    for (let index = 0; index < datos.length; index++) {
      if((datos[index].fecha.slice(0, 2) == this.fechaDiaActualNumerica) && (datos[index].pagoAgosto != "p") ){
        let mensaje = "ID_"+datos[index].identificador+"("+datos[index].fecha+").";
        this.mensajePagoActual.push(mensaje);
      }
      if((datos[index].fecha.slice(0, 2) == this.fechaDiaActualNumerica) && (datos[index].pagoMayo != "p") ){
        let mensaje = "ID_"+datos[index].identificador+"(MAYO).";
        this.mensajePagoAnteriores.push(mensaje);
      }
      if((datos[index].fecha.slice(0, 2) < this.fechaDiaActualNumerica) && (datos[index].pagoMayo != "p") ){
        let mensaje = "ID_"+datos[index].identificador+"(MAYO).";
        this.mensajePagoAnteriores.push(mensaje);
      }
       if((datos[index].fecha.slice(0, 2) < this.fechaDiaActualNumerica) && (datos[index].pagoJunio != "p") ){
        let mensaje = "ID_"+datos[index].identificador+"(JUNIO).";
        this.mensajePagoAnteriores.push(mensaje);
      }
        if((datos[index].fecha.slice(0, 2) < this.fechaDiaActualNumerica) && (datos[index].pagoAgosto != "p") ){
        let mensaje = "ID_"+datos[index].identificador+"(JUlIO).";
        this.mensajePagoAnteriores.push(mensaje);
      }
      if(((datos[index].fecha.slice(0, 2) - this.fechaDiaActualNumerica) < 5) && (datos[index].pagoAgosto != "p") ){
        let mensaje = "ID_"+datos[index].identificador+"(QUEDA "+ (datos[index].fecha.slice(0, 2) - this.fechaDiaActualNumerica)+" DIA).";
        this.mensajePagoFuturo.push(mensaje);
      }
    }
  }

  reiniciarCalculoDias(){
    this.mensajePagoActual = [];
    this.mensajePagoFuturo = [];
    this.mensajePagoAnteriores = [];
  }
}
