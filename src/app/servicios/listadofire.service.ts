import { Injectable } from '@angular/core';
import { Abonado } from '../interfaces/abonado';
import { FirebaseService } from './firebase.service';
import { FechaService } from './fecha.service';

@Injectable({
  providedIn: 'root'
})
export class ListadofireService {

    abonado: Abonado[] = [];
  
    constructor( private data: FirebaseService, public fechaSer: FechaService) {}
    
    ngOnInit(): void {
      this.obtenerDatosAbonado();
    }
  
    obtenerDatosAbonado(){
      this.data.obtenerDatos().subscribe(res=>{
        this.abonado = res.map((e:any)=>{
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
        this.fechaSer.calculoDiaRestante(this.abonado);
      },err =>{
        alert("ERROR")
      });
       this.fechaSer.reiniciarCalculoDias();
    }
  
    crearAbonado(nuevoAbonado: any){
      nuevoAbonado.identificador = this.abonado.length+1;
      this.data.crearDatos(nuevoAbonado);
    }
  
    actualizarAbonado(item: any){
      this.data.actualizarDatos(item);
      this.obtenerDatosAbonado();
    }
  
  
    eliminarAbonado(abonado: Abonado){
      this.data.eliminarDatos(abonado);
    }
  
}
