import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { cookie } from "@/utils";

@Injectable({
  providedIn: "root",
})
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let token = cookie.get("auth_token");

    if (route.routeConfig?.path === "auth" && token)
      return this.router.navigate(["/product/all"]);
    else if (!token) return this.router.navigate(["/auth/login"]);
    else return true;
  }
}
