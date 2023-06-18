import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "@/shared/components/page-not-found/page-not-found.component";
import { cookie } from "./utils";
import { AuthGuard } from "./core/gaurds/auth/auth.guard";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: cookie.get("auth_token") ? "/product/all" : "/auth/login",
  },
  {
    path: "auth",
    loadChildren: () =>
      import("@/modules/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "product",
    loadChildren: () =>
      import("@/modules/product/product.module").then((m) => m.ProductModule),
    canActivate: [AuthGuard],
  },
  {
    path: "cart",
    loadChildren: () =>
      import("@/modules/cart/cart.module").then((m) => m.CartModule),
    canActivate: [AuthGuard],
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
