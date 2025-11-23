import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, query, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login = false;
  valores: any;

  private readonly _firestore = inject(Firestore);
  private readonly _contanctCollec = collection(this._firestore, environment.usuarioColleccion);
  
  constructor() {}

  getAll():Observable<any[]>{
    const queryfn = query(this._contanctCollec);
    return collectionData(queryfn, {idField: 'id'}) as Observable<any[]>
  }

  obtenerDatos(){
    this.getAll().subscribe(res => {
      this.valores = res;
    });
  }

  actualizar(perfil: any){
    const coleccionRef = doc(this._firestore, environment.usuarioColleccion, perfil.id);
    updateDoc(coleccionRef, perfil);
  }

}
