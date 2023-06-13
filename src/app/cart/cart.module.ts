import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CartRoutingModule } from "./cart-routing.module";
import { CartListComponent } from "./pages/cart-list/cart-list.component";
import { CartCardComponent } from './components/cart-card/cart-card.component';

@NgModule({
  declarations: [CartListComponent, CartCardComponent],
  imports: [CommonModule, CartRoutingModule],
})
export class CartModule {}
