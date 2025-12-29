  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root'
  })
  export class FechaService {

    fecha : any = new Date();
    fechaDiaActualNumerica = this.fecha.getDate();
    fechaMesActualNumerica = this.fecha.getMonth()+1;

    mensajePagoActual : any = [];
    mensajePagoAnteriores : any = [];
    mensajePagoFuturo: any = [];

    fechaNueva: any = [];

    mostrarDato = false;

    valoresMesActual : any = [];
    valoresMesAnterior : any = [];

    celularPagoActual: any = [];
    celularPagoAnterior: any = [];

    btnWhatsapp: any = [];

    nombreMesActual : any = [];
    nombreMesAnterior : any = [];

    constructor() {}

    pagoMesAnteriorActual(index: any, datos: any){
       switch(this.fechaMesActualNumerica){
          case 1:
            this.nombreMesAnterior = 'Dic.';
            this.nombreMesActual = 'Ene.';
            this.valoresMesActual.push(datos[index].pagoEnero);
            this.valoresMesAnterior.push(datos[index].pagoDiciembre);
          break;
          case 2:
            this.nombreMesAnterior = 'Ene.';
            this.nombreMesActual = 'Feb.';
            this.valoresMesActual.push(datos[index].pagoFebrero);
            this.valoresMesAnterior.push(datos[index].pagoEnero);
          break;
          case 3:
            this.nombreMesAnterior = 'Feb.';
            this.nombreMesActual = 'Mar.';
            this.valoresMesActual.push(datos[index].pagoMarzo);
            this.valoresMesAnterior.push(datos[index].pagoFebrero);
          break;
          case 4:
            this.nombreMesAnterior = 'Mar.';
            this.nombreMesActual = 'Abr.';
            this.valoresMesActual.push(datos[index].pagoAbril);
            this.valoresMesAnterior.push(datos[index].pagoMarzo);
          break;
          case 5:
            this.nombreMesAnterior = 'Abr.';
            this.nombreMesActual = 'May.';
            this.valoresMesActual.push(datos[index].pagoMayo);
            this.valoresMesAnterior.push(datos[index].pagoAbril);
          break;
          case 6:
            this.nombreMesAnterior = 'May.';
            this.nombreMesActual = 'Jun.';
            this.valoresMesActual.push(datos[index].pagoJunio);
            this.valoresMesAnterior.push(datos[index].pagoMayo);
          break;
          case 7:
            this.nombreMesAnterior = 'Jun.';
            this.nombreMesActual = 'Jul.';
            this.valoresMesActual.push(datos[index].pagoJulio);
            this.valoresMesAnterior.push(datos[index].pagoJunio);
          break;
          case 8:
            this.nombreMesAnterior = 'Jul.';
            this.nombreMesActual = 'Ago.';
            this.valoresMesActual.push(datos[index].pagoAgosto);
            this.valoresMesAnterior.push(datos[index].pagoJulio);
          break;
          case 9:
            this.nombreMesAnterior = 'Ago.';
            this.nombreMesActual = 'Sep.';
            this.valoresMesActual.push(datos[index].pagoSeptiembre);
            this.valoresMesAnterior.push(datos[index].pagoAgosto);
          break;
          case 10:
            this.nombreMesAnterior = 'Sep.';
            this.nombreMesActual = 'Oct.';
            this.valoresMesActual.push(datos[index].pagoOctubre);
            this.valoresMesAnterior.push(datos[index].pagoSeptiembre);
          break;
          case 11:
            this.nombreMesAnterior = 'Oct.';
            this.nombreMesActual = 'Nov.';
            this.valoresMesActual.push(datos[index].pagoNoviembre);
            this.valoresMesAnterior.push(datos[index].pagoOctubre);
          break;
          case 12:
            this.nombreMesAnterior = 'Nov.';
            this.nombreMesActual = 'Dic.';
            this.valoresMesActual.push(datos[index].pagoDiciembre);
            this.valoresMesAnterior.push(datos[index].pagoNoviembre);
          break;
        }
    }

    calculoDiaRestante(datos: any){
      this.reiniciarCalculoDias()
      for (let index = 0; index < datos.length; index++) {
        let diaNumerico = datos[index].fecha.slice(0, 2);
        this.pagoMesAnteriorActual(index, datos);
       
        this.fechaNueva[index] = datos[index].fecha.slice(0, 2)+'-'+datos[index].fecha.slice(2, 4)+"-"+datos[index].fecha.slice(4, 6)
        let resultadoDiferencia = diaNumerico - this.fechaDiaActualNumerica;

        if(resultadoDiferencia < 0  && this.valoresMesActual[index] != "P" && this.valoresMesActual[index] != "p") {
          let mensaje = index+1+"_("+datos[index].identificador+"). "+datos[index].descripcion+" --> "+this.fechaNueva[index];
          this.btnWhatsapp.push(true);
          this.celularPagoAnterior.push(datos[index].cel);
          this.mensajePagoAnteriores.push(mensaje);
        }
        else
        if(resultadoDiferencia == 0 && this.valoresMesActual[index] != "P" && this.valoresMesActual[index] != "p") {
          let mensaje = index+1+"_("+datos[index].identificador+"). "+datos[index].descripcion+" --> "+this.fechaNueva[index];
          this.btnWhatsapp.push(true);
          this.celularPagoActual.push(datos[index].cel);
          this.mensajePagoActual.push(mensaje);
        }else
        if((this.valoresMesAnterior[index] != "P" && this.valoresMesAnterior[index] != "p")){
          let mensaje = index+1+"_("+datos[index].identificador+"). "+datos[index].descripcion+" --> "+this.fechaNueva[index];          
          this.btnWhatsapp.push(true);
          this.celularPagoAnterior.push(datos[index].cel);
          this.mensajePagoAnteriores.push(mensaje);
        }else{
          this.btnWhatsapp.push(false);
        }
      }
      this.mostrarDato = true;
    }

    reiniciarCalculoDias(){
      this.mensajePagoActual = [];
      this.mensajePagoFuturo = [];
      this.mensajePagoAnteriores = [];
      this.valoresMesActual = [];
      this.valoresMesAnterior = [];
      this.btnWhatsapp = [];
    }

    cambioMesPago(datos: any, mesAnterior: any, mesActual: any){
       switch(this.fechaMesActualNumerica){
          case 1:
            datos.pagoEnero = mesActual;
            datos.pagoDiciembre = mesAnterior;
          break;
          case 2:
            datos.pagoFebrero = mesActual;
            datos.pagoEnero = mesAnterior;
          break;
          case 3:
            datos.pagoMarzo = mesActual;
            datos.pagoFebrero = mesAnterior;
          break;
          case 4:
            datos.pagoAbril = mesActual;
            datos.pagoMarzo = mesAnterior;
          break;
          case 5:
            datos.pagoMayo = mesActual;
            datos.pagoAbril = mesAnterior;
          break;
          case 6:
            datos.pagoJunio = mesActual;
            datos.pagoMayo = mesAnterior;
          break;
          case 7:
            datos.pagoJulio = mesActual;
            datos.pagoJunio = mesAnterior;
          break;
          case 8:
            datos.pagoAgosto = mesActual;
            datos.pagoJulio = mesAnterior;
          break;
          case 9:
            datos.pagoSeptiembre = mesActual;
            datos.pagoAgosto = mesAnterior;
          break;
          case 10:
            datos.pagoOctubre = mesActual;
            datos.pagoSeptiembre = mesAnterior;
          break;
          case 11:
            datos.pagoNoviembre = mesActual;
            datos.pagoOctubre = mesAnterior;
          break;
          case 12:
            datos.pagoDiciembre = mesActual;
            datos.pagoNoviembre = mesAnterior;
          break;
        }
    }

  }