import { Component } from '@angular/core';
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {CategoryBarComponent} from "../category-bar/category-bar.component";
import {ProductsListComponent} from "../products-list/products-list.component";
import {ShopComponent} from "../shop/shop.component";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    NavBarComponent,
    CategoryBarComponent,
    ProductsListComponent,
    ShopComponent
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
