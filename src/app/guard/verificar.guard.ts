import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class VerificarGuard implements CanActivate {

  constructor(private authSrv: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    if(this.authSrv.login){
      return true;
    }
    //redirigir
    this.router.navigate(["login"]);
    return false;
    
  } 
  
}
