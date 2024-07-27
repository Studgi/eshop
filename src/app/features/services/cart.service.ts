import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {CartComponent} from "../../core/layout/cart/cart.component";
import {ProductComponent} from "../components/product/product.component";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSource: BehaviorSubject<CartComponent> = new BehaviorSubject<CartComponent>(new CartComponent());
  currentCart: Observable<CartComponent> = this.cartSource.asObservable();

  changeItemCount(product: ProductComponent, delta: number) {
    const cart = this.cartSource.getValue();
    let item = cart.items.filter(i => i.product === product);
    if (item.length === 0) {
      cart.items.push({ product: product, count: delta });
    } else {
      cart.items.forEach(i => {
        if (i.product === product) i.count = item[0].count + delta;
      });
    }
    this.cartSource.next(cart);
  }
}
