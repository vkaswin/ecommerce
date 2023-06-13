import { Component, Input } from "@angular/core";

@Component({
  selector: "order-summary",
  templateUrl: "./order-summary.component.html",
  styleUrls: ["./order-summary.component.scss"],
})
export class OrderSummaryComponent {
  @Input() totalAmount: number = 0;
  @Input() discountAmount: number = 0;
}
