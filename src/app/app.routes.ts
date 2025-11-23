import { Routes } from '@angular/router';
import { ControlpagoComponent } from './paginas/controlpago/controlpago.component';
import { CrearComponent } from './paginas/crear/crear.component';
import { EdicionComponent } from './paginas/edicion/edicion.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { MiperfilComponent } from './paginas/miperfil/miperfil.component';
import { VerificarGuard } from './guard/verificar.guard';

export const routes: Routes = [
    {path: "",  redirectTo: "login", pathMatch: "full"},
    {path: "inicio", component: InicioComponent},
    {path: "edicion", canActivate: [VerificarGuard], component: EdicionComponent},
    {path: "crear", canActivate: [VerificarGuard], component: CrearComponent},
    {path: "login", component: LoginComponent},
    {path: "controlpagos", canActivate: [VerificarGuard], component: ControlpagoComponent},
    {path: "miperfil", canActivate: [VerificarGuard], component: MiperfilComponent}
];
