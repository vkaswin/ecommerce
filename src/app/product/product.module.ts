import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductRoutingModule } from "./product-routing.module";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductListComponent } from "./pages/product-list/product-list.component";
import { SharedModule } from "@/shared/shared.module";

@NgModule({
  declarations: [ProductCardComponent, ProductListComponent],
  imports: [CommonModule, ProductRoutingModule, SharedModule],
})
export class ProductModule {}
