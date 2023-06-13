import { Component, Input } from "@angular/core";
import { IProduct } from "@/types/product";

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent {
  @Input() product = {} as IProduct;
}
