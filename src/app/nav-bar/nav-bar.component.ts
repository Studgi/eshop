import {Component, Input, OnInit} from '@angular/core';
import {FilterService} from "../services/filter.service";
import {RouterLink} from "@angular/router";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  @Input() showSearchBar: boolean = true;
  totalItems : number = 0;

  constructor(private filterService: FilterService, private cartService: CartService) {}

  ngOnInit() {
    this.cartService.currentCart.subscribe(i => {
      this.totalItems = i.getTotalItems();
    });
  }

  changeSearch(input: Event) {
    this.filterService.changeSearch((<HTMLInputElement>input.target).value);
  }
}
