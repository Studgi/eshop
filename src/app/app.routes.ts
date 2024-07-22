import { Routes } from '@angular/router';
import {ShopComponent} from "./shop/shop.component";
import {CartComponent} from "./cart/cart.component";
import {ProductComponent} from "./product/product.component";

export const routes: Routes = [
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
  { path: 'shop', component: ShopComponent, children: [
      { path: 'product/:id', component: ShopComponent }
    ]},
  { path: 'cart', component: CartComponent }
];
