import { state } from "@angular/animations";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild {
   constructor(private authService: AuthService, private router: Router) {}

   // canActivate is required method with implement above
   // calls on the isAuth method in the authService which returns a bool
   // currently always set to false via a timeout ther4 routes to / AKA home

   // auth-guard and auth services must be hooked in app.module providers
   // lastly canActivate is implemented in app-routing.mod.ts on routes

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.isAuthenticated().then(
         (authenticated: boolean) => {
            if (authenticated) {
               return true;
            } else {
               this.router.navigate(['/']);
            }
         }
      );
   }

   canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.canActivate(route, state);
   }
}