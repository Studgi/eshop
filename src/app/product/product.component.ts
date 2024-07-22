import {Component, Input, input, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  hideMathCart: boolean = true;
  itemCount: number = 0;
  copied: boolean = false;

  @Input() product: {
    id: number;
    type: number;
    name: string;
    image: string;
    used: boolean;
    shippingCountry: string;
    likes: number;
    originalPrice: number;
    sellPrice: number;
  } | undefined;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.currentCart.subscribe(i => {
      const iCount = i.getItemCount(this);
      if (iCount <= 0) this.hideMathCart = true;
      this.itemCount = i.getItemCount(this);
    });
  }

  convertPrice(price: number | undefined) : number | undefined {
    if (price === undefined) return undefined;
    return price - 0.01;
  }

  addToCart() {
    this.hideMathCart = false;
    this.cartService.changeItemCount(this, 1);
  }

  changeItemCount(delta: number) {
    this.cartService.changeItemCount(this, delta);
  }

  copy() {
    if (this.copied) return;

    navigator.clipboard.writeText("http://localhost:4200/shop/product/"+this.product?.id).then(() => {
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000); // Hide message after 2 seconds
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }
}
