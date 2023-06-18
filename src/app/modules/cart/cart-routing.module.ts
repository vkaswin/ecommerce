import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartListComponent } from "./pages/cart-list/cart-list.component";
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: CartListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
