import { Component, OnInit } from '@angular/core';

import * as pets from '../../pets.json';

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
    this.items = pets.default;
    this.selectedSegment = 'featured';
  }
}
