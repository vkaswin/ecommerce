import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductRoutingModule } from "./product-routing.module";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductListComponent } from "./pages/product-list/product-list.component";
import { ProductDetailComponent } from "./pages/product-detail/product-detail.component";
import { SharedModule } from "@/shared/shared.module";
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent,
    ProductDetailComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, ProductRoutingModule, SharedModule],
})
export class ProductModule {}
