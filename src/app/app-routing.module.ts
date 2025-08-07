import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './paginas/crear/crear.component';
import { EdicionComponent } from './paginas/edicion/edicion.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ListadoComponent } from './paginas/listado/listado.component';
import { VerificarGuard } from './guard/verificar.guard';

const routes: Routes = [
    {path: "",  redirectTo: "inicio", pathMatch: "full"},
    {path: "inicio", component: InicioComponent},
    {path: "listado",canActivate: [VerificarGuard], component: ListadoComponent},
    {path: "edicion", component: EdicionComponent},
    {path: "crear", component: CrearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
