import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

export interface CanComponentDeactivate {
   // interface is a contract that forces this class to provide some logic
   // interface does not contain acutal logic just what the logic should look like
   canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}


// CanDeactivate implemented below is provided by ng/router and wraps our own interface that forces a comp/class to call canDeactivate method
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
   // the method below is what will actually be called when user tries to leaves a component
   canDeactivate(component: CanComponentDeactivate,
      currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot,
      // ? below signifies optional arguement
      nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
         // return below calls canDeactive on the current component
         return component.canDeactivate();
      }
}

// THIS WHOLE SERVICE SERVES AS A CONNECTION BETWEEN THE GUARD AND THE COMPONENT
// make sure this service is added to the providers array in the app.module