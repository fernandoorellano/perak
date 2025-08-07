import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterLink, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificarGuard implements CanActivate {
   constructor() {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
   console.log("canactivate activado", RouterLink);
   return true;
    
  } 
  
}
