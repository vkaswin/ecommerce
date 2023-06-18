import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "@/modules/product/services/product.service";
import { IProduct } from "@/modules/product/types/product";
import { debounce } from "@/utils";

@Component({
  selector: "search-box",
  templateUrl: "./search-box.component.html",
  styleUrls: ["./search-box.component.scss"],
})
export class SearchBoxComponent {
  search = "";
  products: IProduct[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  handleSearch = debounce((event: Event) => {
    let value = (event.target as HTMLInputElement).value;
    this.search = value;
    this.productService.searchProducts(value).subscribe(({ products }) => {
      this.products = products;
    });
  }, 500);

  resetSearch() {
    this.search = "";
    this.products.length = 0;
  }

  handleClick(id: number) {
    this.router.navigate(["/product", id, "detail"]);
    this.resetSearch();
  }
}
