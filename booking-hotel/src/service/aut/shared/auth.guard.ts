import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/service/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private service:LoginService, private route:Router){}

  canActivate(){
    if(this.service.IsLogin()){

      return true;
    }else{
      this.route.navigate(["Login"])
      return false;
    }

  }

}

