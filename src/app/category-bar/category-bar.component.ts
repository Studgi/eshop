import {Component} from '@angular/core';
import {FilterService} from "../services/filter.service";

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [],
  templateUrl: './category-bar.component.html',
  styleUrl: './category-bar.component.css',
})
export class CategoryBarComponent {

  categories: {id: number, name: string}[] = [
    {id: 0, name: "All"},
    {id: 1, name: "Home appliance"},
    {id: 2, name: "PCs"},
    {id: 3, name: "Laptops"},
    {id: 4, name: "Tablets"},
    {id: 5, name: "Phones"},
    {id: 6, name: "Electronics"}
  ];

  selectedCategoryId: number = 0;

  constructor(private service: FilterService) {
  }

  setSelectedCategory(id: number) {
    this.selectedCategoryId = id;
    this.service.changeSelectedCategory(id);
  }
}
