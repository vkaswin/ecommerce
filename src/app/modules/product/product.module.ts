import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductRoutingModule } from "./product-routing.module";
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductListComponent } from "./product-list/product-list.component";

@NgModule({
  declarations: [ProductCardComponent, ProductListComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
