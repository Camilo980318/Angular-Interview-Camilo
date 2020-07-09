import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedGuard implements CanActivate {

  constructor(public router: Router) { }

  // El objetivo de este guard es que usuario no pueda acceder a los detalles de un post por url
  // si haber seleccionado uno.a

  canActivate() {

    // Si existe la badera 'selected'...
    if (localStorage.getItem('selected')) {
      return true;
    } else {
      this.router.navigate(['post']);
      return false;
    }
  }

}
