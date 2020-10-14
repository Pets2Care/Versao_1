import { Component, OnInit } from '@angular/core';

import * as pets from '../../pets.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public items: any[];
  public filteredItems: any[];
  public selectedSegment: string;

  constructor() {}

  ngOnInit(): void {
    this.selectedSegment = 'all';
    console.log('pets = ', pets.default);
    this.items = pets.default;
    this.filteredItems = this.items;
  }

  applySegmentFilter(ev: any): void {
    const type = ev.detail.value;
    console.log('type = ', type);
    if (type === 'all') {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter(i => i.type === type);
      console.log('filtrados = ', this.filteredItems);
    }
  }
}
