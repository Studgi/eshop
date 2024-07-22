import {Component, OnInit} from '@angular/core';
import {CategoryBarComponent} from "../category-bar/category-bar.component";
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {ProductsListComponent} from "../products-list/products-list.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shop',
  standalone: true,
    imports: [
        CategoryBarComponent,
        NavBarComponent,
        ProductsListComponent
    ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{

  id: number = -1;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id);
      this.id = id !== null ? parseInt(id, 10) : -1;
    });
  }
}
