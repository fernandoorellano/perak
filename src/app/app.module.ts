import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import {HttpClientModule} from '@angular/common/http';


import { ListadofirebaseComponent } from './componentes/listadofirebase/listadofirebase.component';
import { ListadopagoComponent } from './componentes/listadopago/listadopago.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CrearComponent } from './paginas/crear/crear.component';
import { EdicionComponent } from './paginas/edicion/edicion.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ListadoComponent } from './paginas/listado/listado.component';

@NgModule({
  declarations: [
      AppComponent,
    ListadofirebaseComponent,
    ListadopagoComponent,
    NavbarComponent,
    CrearComponent,
    EdicionComponent,
    InicioComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
