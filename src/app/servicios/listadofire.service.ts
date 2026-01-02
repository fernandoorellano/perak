import { Injectable } from '@angular/core';
import { FechaService } from './fecha.service';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class ListadofireService {

  constructor(public fechaSer: FechaService, public firesServ: FirestoreService) { }

  controlPagos(pago: string, mesAnterior: string, mesActual: string){
    if(mesAnterior != 'p' && mesAnterior != 'P'){
          mesAnterior = pago;
        }else
    {mesActual = pago;}
  }


  actualizarMesPago(pago:string, abonado: any){
      switch(this.fechaSer.fechaMesActualNumerica){
        case 1:
          if(abonado.pagoDiciembre != 'p' && abonado.pagoDiciembre != 'P'){
              abonado.pagoDiciembre = pago;
            }else
            {abonado.pagoEnero = pago;
              abonado.pagoFebrero = '';
              abonado.pagoMarzo = '';
              abonado.pagoAbril = '';
              abonado.pagoMayo = '';
              abonado.pagoJunio = '';
              abonado.pagoJulio = '';
              abonado.pagoAgosto = '';
              abonado.pagoSeptiembre = '';
              abonado.pagoOctubre = '';
              abonado.pagoNoviembre = '';
            }
        break;
        case 2:
          if(abonado.pagoEnero != 'p' && abonado.pagoEnero != 'P'){
              abonado.pagoEnero = pago;
            }else
            {abonado.pagoFebrero = pago;
                abonado.pagoMarzo = '';
                abonado.pagoAbril = '';
                abonado.pagoMayo = '';
                abonado.pagoJunio = '';
                abonado.pagoJulio = '';
                abonado.pagoAgosto = '';
                abonado.pagoSeptiembre = '';
                abonado.pagoOctubre = '';
                abonado.pagoNoviembre = '';
            }
        break;
        case 3:
          if(abonado.pagoFebrero != 'p' && abonado.pagoFebrero != 'P'){
              abonado.pagoFebrero = pago;
            }else
            {abonado.pagoMarzo = pago;}
          break;
        case 4:
          if(abonado.pagoMarzo != 'p' && abonado.pagoMarzo != 'P'){
              abonado.pagoMarzo = pago;
            }else
            {abonado.pagoMayo = pago;}
          break;
        case 5:
          if(abonado.pagoMayo != 'p' && abonado.pagoMayo != 'P'){
              abonado.pagoMayo = pago;
            }else
            {abonado.pagoJunio = pago;}
          break;
        case 6:
          if(abonado.pagoMayo != 'p' && abonado.pagoMayo != 'P'){
              abonado.pagoMayo = pago;
            }else
            {abonado.pagoJunio = pago;}
          break;
        case 7:
            if(abonado.pagoJunio != 'p' && abonado.pagoJunio != 'P'){
              abonado.pagoJunio = pago;
            }else
            {abonado.pagoJulio = pago;}
          break;
        case 8:
              if(abonado.pagoJulio != 'p' && abonado.pagoJulio != 'P'){
              abonado.pagoJulio = pago;
            }else
            {abonado.pagoAgosto = pago;}
          break;
        case 9:
            if(abonado.pagoAgosto != 'p' && abonado.pagoAgosto != 'P'){
              abonado.pagoAgosto = pago;
            }else
            {abonado.pagoSeptiembre = pago;}
          break;
        case 10:
            if(abonado.pagoSeptiembre != 'p' && abonado.pagoSeptiembre != 'P'){
              abonado.pagoSeptiembre = pago;
            }else
            {abonado.pagoOctubre = pago;}
        break;
        case 11:
            if(abonado.pagoOctubre != 'p' && abonado.pagoOctubre != 'P'){
              abonado.pagoOctubre = pago;
            }else
            {abonado.pagoNoviembre = pago;}
        break;
        case 12:
            if(abonado.pagoNoviembre != 'p' && abonado.pagoNoviembre != 'P'){
              abonado.pagoNoviembre = pago;
            }else
            {abonado.pagoDiciembre = pago;}
        break;
      }
      this.firesServ.actualizarPago(abonado);
    }

}
