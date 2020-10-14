import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public items: any[] = [
    {
      name: 'andre',
      description: 'descricao andre',
      type: 'dog',
    },
    {
      name: 'bandre',
      description: 'descricao bandre',
      type: 'cat',
    },
    {
      name: 'candre',
      description: 'descricao candre',
      type: 'dog',
    },
  ];

  public filteredItems: any[];
  public selectedSegment: string;

  constructor() {}

  ngOnInit(): void {
    this.selectedSegment = 'all';
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
