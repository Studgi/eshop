import { Component } from '@angular/core';
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  items: {product: ProductComponent, count: number}[] = [];

  getTotalItems() : number {
    let sum = 0;
    this.items.forEach(i => {
      sum += i.count;
    });
    return sum;
  }

  getItemCount(product : ProductComponent) : number {
    for (const i of this.items) {
      if (i.product === product) return i.count;
    }
    return 0;
  }
}
