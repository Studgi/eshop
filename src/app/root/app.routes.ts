import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
  { path: 'shop', loadComponent: () => import('../core/layout/container/container.component').then(c => c.ContainerComponent) },
  { path: 'cart', loadComponent: () => import('../core/layout/cart/cart.component').then(c => c.CartComponent) },
];
