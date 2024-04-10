import { Product } from "./product";
import { ProductService } from "./productservice";
import { Component, Input, inject } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AsyncPipe, NgIf } from "@angular/common";
// Import PrimeNG modules
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import { SelectButtonModule } from "primeng/selectbutton";

@Component({
  selector: "app-danhsach",
  templateUrl: "./danhsach.component.html",
  imports: [CommonModule, TableModule, SelectButtonModule],
  standalone: true,
})
export class TableSizeDemo {
  products!: Product[];
  @Input() input_data_con!: string;
  @Input() product_cha!: Product[];

  sizes!: any[];
  selectedSize: any = "";
  count!: number;
  // constructor(private productService: ProductService) {}
  ngOnInit() {
    // this.productService.getProductsMini().then((data) => {
    //     this.products = data;
    // });
    this.products = [
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        category: "Product Description",
        quantity: 1,
      },
      {
        id: "1001",
        code: "nvklal433",
        name: "Black Watch",
        category: "Product Description",
        quantity: 1,
      },
      {
        id: "1002",
        code: "zz21cz3c1",
        name: "Blue Band",
        category: "Product Description",
        quantity: 1,
      },
      {
        id: "1003",
        code: "244wgerg2",
        name: "Blue T-Shirt",
        category: "Product Description",
        quantity: 1,
      },
      {
        id: "1004",
        code: "h456wer53",
        name: "Bracelet",
        category: "Product Description",
        quantity: 1,
      },
    ];

    this.sizes = [
      { name: "Small", class: "p-datatable-sm" },
      { name: "Normal", class: "" },
      { name: "Large", class: "p-datatable-lg" },
    ];
  }
}
