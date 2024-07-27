import {Component, OnInit} from '@angular/core';
import {ProductComponent} from "../product/product.component";
import {FilterService} from "../../../core/services/filter.service";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    ProductComponent
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {

  products: {
    id: number;
    type: number;
    name: string;
    image: string;
    used: boolean;
    shippingCountry: string;
    likes: number;
    originalPrice: number;
    sellPrice: number;
    description: string;
  }[] | undefined = [];

  filterId: number = 0;
  search: string = '';

  constructor(private filterService: FilterService, private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.products;

    this.filterService.currentFilter.subscribe((id) => {
      this.filterId = id;
    });

    this.filterService.currentSearch.subscribe((value) => {
      this.search = value;
    })
  }
}
