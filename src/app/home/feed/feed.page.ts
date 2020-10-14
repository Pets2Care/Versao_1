import { Component, OnInit } from '@angular/core';

import pets from '../../pets.js';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public items: any[];
  public selectedSegment: string;

  constructor() {}

  ngOnInit() {
    this.items = pets;
    this.selectedSegment = 'featured';
  }
}
