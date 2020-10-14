import { Component, OnInit } from '@angular/core';

import * as pets from '../../../pets.json';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.page.html',
  styleUrls: ['./featured.page.scss'],
})
export class FeaturedPage implements OnInit {
  photos: any[];
  constructor() {}

  ngOnInit() {
    photos = pets.default;
  }
}
