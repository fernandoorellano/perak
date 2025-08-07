import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Abonado } from '../interfaces/abonado';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs : AngularFirestore) {}

  /* MIRAR
  https://www.youtube.com/watch?v=IoVOFdSZqzk
   */

   crearDatos(datos: Abonado){
    datos.id = this.afs.createId();
    return this.afs.collection('/abonados').add(datos);
   }

   obtenerDatos(){
    return this.afs.collection('/abonados', ref => ref.orderBy('identificador', 'asc')).snapshotChanges();
   }

   eliminarDatos(abonado: Abonado){
    return this.afs.doc('/abonados/'+abonado.id).delete();
   }

    actualizarDatos(abonado: Abonado) {
      return this.afs.doc('/abonados/'+abonado.id).update(abonado);
    }

   updateStuden(abonado: Abonado){
    this.eliminarDatos(abonado);
    this.actualizarDatos(abonado);
   }


}
