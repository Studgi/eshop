import {Component, Input, OnInit} from '@angular/core';
import {FilterService} from "../../services/filter.service";
import {RouterLink} from "@angular/router";
import {CartService} from "../../../features/services/cart.service";
import {AutoCompleteCompleteEvent, AutoCompleteModule} from 'primeng/autocomplete';
import {ProductService} from "../../../features/services/product.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    AutoCompleteModule,
    FormsModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  @Input() showSearchBar: boolean = true;
  totalItems: number = 0;
  productSuggestions: {
    id: number;
    type: number;
    name: string;
    image: string;
    used: boolean;
    shippingCountry: string;
    likes: number
    originalPrice: number;
    sellPrice: number;
    description: string;
  }[] = [];
  selectedProduct: string = "";

  constructor(private filterService: FilterService, private cartService: CartService, private productService: ProductService) {}

  ngOnInit() {
    this.productSuggestions = this.productService.products;
    this.cartService.currentCart.subscribe(i => {
      this.totalItems = i.getTotalItems();
    });
  }

  changeSearch(input: Event) {
    this.filterService.changeSearch((<HTMLInputElement>input.target).value);
  }

  searchAutoComplete(event: AutoCompleteCompleteEvent) {
    this.productSuggestions = this.productService.products
      .filter(p => p.name.toLowerCase().includes(event.query.toLowerCase()));
  }
}
