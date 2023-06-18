import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "@/shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/product/all" },
  {
    path: "auth",
    loadChildren: () =>
      import("@/modules/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "product",
    loadChildren: () =>
      import("@/modules/product/product.module").then((m) => m.ProductModule),
  },
  {
    path: "cart",
    loadChildren: () =>
      import("@/modules/cart/cart.module").then((m) => m.CartModule),
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
