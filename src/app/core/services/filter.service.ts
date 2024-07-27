import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private filterSource = new BehaviorSubject<number>(0);
  currentFilter = this.filterSource.asObservable();

  changeSelectedCategory(id: number) {
    this.filterSource.next(id);
  }

  private searchSource = new BehaviorSubject<string>('');
  currentSearch = this.searchSource.asObservable();

  changeSearch(value: string) {
    this.searchSource.next(value);
  }
}
