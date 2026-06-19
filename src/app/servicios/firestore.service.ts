import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, DocumentData, DocumentReference, Firestore, orderBy, query, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Abonado } from '../interfaces/abonado';
import { environment } from '../../environments/environment.development';
import { FechaService } from './fecha.service';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  private readonly _firestore = inject(Firestore);
  private readonly _contanctCollec = collection(this._firestore, environment.fireNombreColeccion);
  abonados!: Abonado[];
  datosAbonado: any;
  datosVacios = false;
  msgAct = false;

  constructor(public fechaSer: FechaService) {}

  getAll():Observable<Abonado[]>{
    const queryfn = query(this._contanctCollec, orderBy('fecha', 'asc'));
    return collectionData(queryfn, {idField: 'id'}) as Observable<Abonado[]>
  }

  obtenerDatos(){
    this.getAll().subscribe(res => {
      this.abonados = res;
      if(this.abonados.length == 0){
        this.datosVacios = false;
      }else{
        this.datosVacios = true;
        this.msgAct = !this.msgAct;
      }
      this.fechaSer.calculoDiaRestante(this.abonados);
    });
    this.fechaSer.reiniciarCalculoDias();
  }

  crearDatos(abonado: any){
    const coleccionRef = collection(this._firestore, environment.fireNombreColeccion);
    addDoc(coleccionRef, abonado);
  }

  // actualizar desde btn OK en edicion
  actualizarDesdeBtnOk(abonado: any, fecha: any, mesAnterior: any, mesActual: any){
    this.fechaSer.cambioMesPago(abonado,mesAnterior, mesActual);
    const nuevaDesc = abonado.descripcion;
    abonado.descripcion = nuevaDesc;
    const fechaNueva = fecha.slice(0, 2)+fecha.slice(3, 5)+fecha.slice(6, 8);
    abonado.fecha = fechaNueva;
    const celNuevo = abonado.cel;
    abonado.cel = celNuevo;
    const coleccionRef = doc(this._firestore, environment.fireNombreColeccion, abonado.id);
    updateDoc(coleccionRef, abonado);
    
    // this.fechaSer.mostrarDato = false
    // this.datosVacios = !this.datosVacios;
    // this.fechaSer.mensajePagoAnteriores = "";
    
  }

  // actualizar pago
  actualizarPago(abonado: any){
    const coleccionRef = doc(this._firestore, environment.fireNombreColeccion, abonado.id);
    updateDoc(coleccionRef, abonado);
  }

  eliminar(abonado: any){
    deleteDoc(doc(this._firestore, environment.fireNombreColeccion, abonado.id));
  }

}
