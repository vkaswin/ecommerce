import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";

import { ProductModule } from "./modules/product/product.module";
import { CartModule } from "./modules/cart/cart.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ProductModule, CartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
