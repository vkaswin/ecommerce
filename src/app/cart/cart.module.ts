import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CartRoutingModule } from "./cart-routing.module";
import { CartListComponent } from "./pages/cart-list/cart-list.component";
import { CartCardComponent } from './components/cart-card/cart-card.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';

@NgModule({
  declarations: [CartListComponent, CartCardComponent, OrderSummaryComponent],
  imports: [CommonModule, CartRoutingModule],
})
export class CartModule {}
